import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, mergeMap, filter, distinctUntilChanged } from 'rxjs/operators';
import { TwitchService } from '../shared/services/twitch.service';
import { DataSharedService } from '../shared/services/data-shared.service';
import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  limit: any = '10';
  result = [];
  subscriptions: Subscription[] = [];
  search;
  loading = false;
  currentFilter = 'Streams';
  currentTitle = 'Top Games';
  numberResults = '10';
  hasCookie: boolean;
  private readonly notifier: NotifierService;

  constructor(
    private _twitchService: TwitchService,
    private _dataSharedService: DataSharedService,
    private _cookieService: CookieService,
    private  _notifierService: NotifierService
  ) {
    this.notifier = _notifierService;
  }

  ngOnInit() {
    this.hasCookie = !!this._cookieService.get('numberResults');
    console.log(this.hasCookie);

    if (!this.hasCookie) {
      this.numberResults = '10';
    } else {
      this.numberResults = this._cookieService.get('numberResults');
      this.limit = this.numberResults;
    }

    this.subscriptions.push(this._dataSharedService.currentDetail.subscribe((data: any) => {
      if (data) {
        this.currentTitle = data;
      }
    }));
  }

  ngAfterViewInit() {
    this.realTimeSearch();
  }

  public realTimeSearch() {
    const el = document.getElementById('search-bar');
    fromEvent(el, 'keyup')
      .pipe(filter((data: any) => {
        this.loading = true;
        this.result = [];
        if (data.target.value.trim() === '') {
          setTimeout(() => {
            this.loading = false;
          }, 2000);
          this.result = [];
          return false;
        }
        return true;
      }))
      .pipe(debounceTime(600))
      .pipe(distinctUntilChanged())
      .pipe(mergeMap(() => {
        switch (this.currentFilter) {
          case 'Channels':
            return this._twitchService.searchChannel(this.search, this.limit);
          case 'Streams':
            return this._twitchService.searchStream(this.search, this.limit);
          case 'Games':
            return this._twitchService.searchGame(this.search, this.limit);
        }
      }))
      .subscribe((data: any) => {
        if (data) {
          switch (this.currentFilter) {
            case 'Channels':
              this.result = data.channels;
              break;
            case 'Streams':
              this.result = data.streams;
              break;
            case 'Games':
              this.result = data.games;
              break;
          }
          this.loading = false;
        } 
      }, error => {
        this.realTimeSearch();
        this.loading = false;
        this.notifier.notify( 'error', 'Something happened or No results found!' );


      });
  }

  removeSearch() {
    this.result = [];
    this.search = '';
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.result = [];
    this.search = '';
  }

  setNumberResults(number) {
    this.numberResults = number;
    this.limit = number;
    this._dataSharedService.setCountResult(number);
    this._cookieService.set('numberResults', number);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

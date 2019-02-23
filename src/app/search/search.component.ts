import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TwitchService } from '../shared/services/twitch.service';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, mergeMap, filter, distinctUntilChanged } from 'rxjs/operators';
import { DataSharedService } from '../shared/services/data-shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit, AfterViewInit {

  limit = 10;
  result = [];
  subscriptions: Subscription[] = [];
  search;
  loading = false;
  currentFilter = 'Streams';

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
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
        console.log(error);
        this.loading = false;
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

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

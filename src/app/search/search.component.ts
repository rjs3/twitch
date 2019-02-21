import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TwitchService } from '../shared/services/twitch.service';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, mergeMap, filter, distinctUntilChanged } from 'rxjs/operators';

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

  constructor(private _twitchService: TwitchService) { }
  
  ngOnInit() {
  }

  ngAfterViewInit(){
    this.realTimeSearch();
  }

  public realTimeSearch() {
   const el = document.getElementById('search-bar');
     fromEvent(el, 'keyup')
    .pipe(filter((data:any) => {
      this.loading = true;
      if(data.target.value.trim() === '') {
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
      return this._twitchService.searchChannel(this.search, this.limit)
    }))
    .subscribe((data:any)=> {
      if (data && data.channels && data.channels.length > 0) {
        data.channels.forEach(element => {
          this.result.push(element.display_name);
          this.loading = false;
        });
      }
    }, error => {
      this.realTimeSearch();
      console.log(error);
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

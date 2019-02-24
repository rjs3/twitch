import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TwitchService } from 'src/app/shared/services/twitch.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {
  
  resultTopGames = [];
  subscriptions: Subscription[] = [];
  loading:boolean = true;

  constructor(private _twitchService: TwitchService) { }

  ngOnInit() {
    this.subscriptions.push(this._twitchService.topGames().subscribe((data:any) => {
      if(data) {
        this.resultTopGames = data.top;
        console.log(this.resultTopGames);
        this.clearLoading();
      } else {
        this.resultTopGames = [];
        this.clearLoading();
      }
    }));
  }

  clearLoading() {
    let timeout = setTimeout(() => {
      this.loading = false;
      clearTimeout(timeout);
    }, 1000);
  }

}

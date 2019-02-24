import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit, OnDestroy {

  @Input() resultGames: any;
  constructor(private _dataSharedService: DataSharedService) { }

  ngOnInit() {
    console.log('games', this.resultGames);
    this._dataSharedService.setDetail('Games');
  }

  redirectToGame(game) {
    window.open(`https://www.twitch.tv/directory/game/${game}`);
  }

  ngOnDestroy() {
     this._dataSharedService.setDetail('Top Games');
  }

}

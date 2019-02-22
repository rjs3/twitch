import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  @Input() resultGames: any;
  constructor() { }

  ngOnInit() {
    console.log('games', this.resultGames);
  }

}

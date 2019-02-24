import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit {

  @Input() resultChannels: any;
  constructor() { }

  ngOnInit() {
    console.log('resultado', this.resultChannels);
  }

}

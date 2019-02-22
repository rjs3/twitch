import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-streams',
  templateUrl: './list-streams.component.html',
  styleUrls: ['./list-streams.component.scss']
})
export class ListStreamsComponent implements OnInit {

  @Input() resultStreams: any;
  constructor() { }

  ngOnInit() {
    console.log('Streams', this.resultStreams);
  }

}

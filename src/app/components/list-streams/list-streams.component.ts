import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-list-streams',
  templateUrl: './list-streams.component.html',
  styleUrls: ['./list-streams.component.scss']
})
export class ListStreamsComponent implements OnInit {

  url_video: string;
  currentPage = 'list';
  stream: any;
  iframeURL: string;

  @Input() resultStreams: any;
  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  openStream(stream) {
    console.log('Selected Stream:', stream);
    this.stream = stream;
    this.iframeURL = `https://player.twitch.tv/?channel=${this.stream.channel.display_name}`;
    console.log(this.iframeURL);
    this.currentPage = 'stream';
  }

}

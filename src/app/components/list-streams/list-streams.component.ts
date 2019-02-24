import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';
import { TwitchService } from 'src/app/shared/services/twitch.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-streams',
  templateUrl: './list-streams.component.html',
  styleUrls: ['./list-streams.component.scss']
})
export class ListStreamsComponent implements OnInit, OnDestroy {

  url_video: string;
  currentPage = 'list';
  stream: any;
  iframeURL: string;
  subscriptions: Subscription[] = [];

  @Input() resultStreams: any;
  constructor(
    public sanitizer: DomSanitizer,
    private _dataSharedService: DataSharedService
  ) { }

  ngOnInit() {
    this._dataSharedService.setDetail('Streams');
  }

  openStream(stream) {
    console.log('Selected Stream:', stream);
    this.stream = stream;
    this.iframeURL = `https://player.twitch.tv/?channel=${this.stream.channel.display_name}`;
    console.log(this.iframeURL);
    this.currentPage = 'stream';

  }

  ngOnDestroy() {
    this._dataSharedService.setDetail('Top Games');
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    });
  }

}

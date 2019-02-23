import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DataSharedService } from '../shared/services/data-shared.service';
declare var $: any;

@Component({
  selector: 'app-list-streams',
  templateUrl: './list-streams.component.html',
  styleUrls: ['./list-streams.component.scss']
})
export class ListStreamsComponent implements OnInit {

  url_video: string;

  @Input() resultStreams: any;
  @ViewChild('modalVideo') modalVideo: ElementRef;

  constructor(private _dataSharedService: DataSharedService) { }

  ngOnInit() {
  }

  previewDetail(stream) {
    this._dataSharedService.setDetail(stream);
  }

  openPreview(stream) {
    console.log(stream);
    this.url_video = stream.channel.url;
    $(this.modalVideo.nativeElement).modal('show');
  }

}

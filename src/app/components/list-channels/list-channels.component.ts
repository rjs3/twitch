import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';

@Component({
  selector: 'app-list-channels',
  templateUrl: './list-channels.component.html',
  styleUrls: ['./list-channels.component.scss']
})
export class ListChannelsComponent implements OnInit, OnDestroy {

  @Input() resultChannels: any;
  constructor(private _dataSharedService: DataSharedService) { }

  ngOnInit() {
    console.log('resultado', this.resultChannels);
    this._dataSharedService.setDetail('Channels');
  }

  ngOnDestroy() {
    this._dataSharedService.setDetail('Top Games');
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitchService } from '../shared/services/twitch.service';
import { HttpClientModule } from '@angular/common/http';
import { TopGamesComponent } from '../components/top-games/top-games.component';
import { PreloadingModule } from '../shared/components/preloading/preloading.module';
import { ListStreamsComponent } from '../components/list-streams/list-streams.component';
import { ListGamesComponent } from '../components/list-games/list-games.component';
import { ListChannelsComponent } from '../components/list-channels/list-channels.component';
import { DataSharedService } from '../shared/services/data-shared.service';
import { CookieService } from 'ngx-cookie-service';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'left',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 2500,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PreloadingModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  declarations: [
    MainComponent,
    TopGamesComponent,
    ListStreamsComponent,
    ListGamesComponent,
    ListChannelsComponent
  ],
  providers: [
    TwitchService,
    DataSharedService,
    CookieService
  ]
})
export class MainModule { }

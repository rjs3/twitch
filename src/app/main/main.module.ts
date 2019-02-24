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

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PreloadingModule
  ],
  declarations: [
    MainComponent,
    TopGamesComponent,
    ListStreamsComponent,
    ListGamesComponent,
    ListChannelsComponent
  ],
  providers: [TwitchService]
})
export class MainModule { }

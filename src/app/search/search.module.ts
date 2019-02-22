import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitchService } from '../shared/services/twitch.service';
import { TopGamesComponent } from '../top-games/top-games.component';
import { PreloadingModule } from '../shared/components/preloading/preloading.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ListChannelsComponent } from '../list-channels/list-channels.component';
import { ListStreamsComponent } from '../list-streams/list-streams.component';
import { ListGamesComponent } from '../list-games/list-games.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PreloadingModule
  ],
  declarations: [
    SearchComponent,
    TopGamesComponent,
    SidenavComponent,
    ListChannelsComponent,
    ListStreamsComponent,
    ListGamesComponent
  ],
  providers: [TwitchService]
})
export class SearchModule { }

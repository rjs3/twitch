import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitchService } from '../shared/services/twitch.service';
import { TopGamesComponent } from '../top-games/top-games.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent, TopGamesComponent],
  providers: [TwitchService]
})
export class SearchModule { }

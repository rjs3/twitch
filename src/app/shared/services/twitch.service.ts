import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Client-ID': 'i4d2hs1a0mc2mf3z6urspdyd46bfkr'
    })
};

@Injectable()
export class TwitchService {
    //Api Twitch v5
    TWITCH_API_URL: string = 'https://api.twitch.tv/kraken/';
    LIMIT: string = '10';

    constructor(private _http: HttpClient) {

    }

    //TRAZ UM CANAL ESPECIFICO
    /*  test() {
         return this._http.get(`${this.TWITCH_API_URL}/users?login=namelessherotv`, httpOptions);
     } */


    //RealtimeSearch - by Channel
    searchChannel(channel, limit) {
        return this._http.get(`${this.TWITCH_API_URL}/search/channels?query=${channel}&limit=${limit}`, httpOptions);
    }

    //RealtimeSearch - by Streams
    searchStream(stream, limit) {
        return this._http.get(`${this.TWITCH_API_URL}/search/streams?query=${stream}&limit=${limit}`, httpOptions);
    }

    //RealtimeSearch - by Games
    searchGame(game, limit) {
        return this._http.get(`${this.TWITCH_API_URL}/search/games?query=${game}&type=suggest`, httpOptions);
    }

    //Return Top Games
    topGames() {
        return this._http.get(`${this.TWITCH_API_URL}/games/top?limit=12`, httpOptions);
    }


}
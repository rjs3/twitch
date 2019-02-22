import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Client-ID': 'i4d2hs1a0mc2mf3z6urspdyd46bfkr'
    })
};

@Injectable()
export class TwitchService {
    TWITCH_API_KEY: string = 'teste';
    //Api Twitch v6
    TWITCH_API_URL: string = 'https://api.twitch.tv/kraken/';
    LIMIT: string = '10';

    constructor(private _http: HttpClient) {

    }

    //TRAZ UM CANAL ESPECIFICO

    /*  test() {
         return this._http.get(`${this.TWITCH_API_URL}/users?login=namelessherotv`, httpOptions);
     } */

    
     
    //SEARCH CANAIS
    /* 
        test() {
            return this._http.get(`${this.TWITCH_API_URL}/search/channels?query=nameless&limit=20`, httpOptions);
        } */

    //RealtimeSearch
    searchChannel(channel, limit) {
        return this._http.get(`${this.TWITCH_API_URL}/search/channels?query=${channel}&limit=${limit}`, httpOptions);
    }

    //Return Top Games
    topGames() {
        return this._http.get(`${this.TWITCH_API_URL}/games/top?limit=12`, httpOptions);
    } 



}
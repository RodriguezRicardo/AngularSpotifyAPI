import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  //Rrl per oauth: https://developer.spotify.com/console/get-search-item/
  //Modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD4LbeaM4cuwe4fZicclcKhQyuNSGCMYBZ_3Z2LGUX2iDbmcRrx-fw8YPJFddYTicWD-Xhcnak18SOZHTEtwVCmjt9w3mDtIrDXY-9lCRsSkcDa-Kk5D8279JcFAh5t9URT1smr2Kip6g8-Hju6kmbaq-kpF3s'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;  //Ritorno observable(obsTracks) ai componenti che richiedono il servizio
  }
}

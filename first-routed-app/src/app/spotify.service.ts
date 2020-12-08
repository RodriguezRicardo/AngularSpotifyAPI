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
        'Bearer BQDxC3JRZySMqrzlCd7sI3dXP8a4pwPYhwnOLlKAxDTbmdIHquusZkHUPgzxbDPe1D--x7Tg6tGhBkCQ71otqSvWkivIKDLB8n1SMwzA0PoOV2LkmnK2WcKYSxr1j2cJqIG9hfxy0yGFiaUCGiyD6U8MqKboOSY'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;  //Ritorno observable(obsTracks) ai componenti che richiedono il servizio
  }
}

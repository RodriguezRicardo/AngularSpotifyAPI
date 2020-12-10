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
        'Bearer BQAvBOvikykjyvMvUU3Q3RgFdwXzX1OYUqDixuVz55Gjk3gO_5Nf2LBaf6c8JXy-cxS3BUuUh0GWRtKERZByDK1VURR5bBW4vbHHDXAyroi4znlWDV2xj7qADX8SMxlKTM_4RBpcKxljdEoZFErFbLvvaf-d0r0'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;  //Ritorno observable(obsTracks) ai componenti che richiedono il servizio
  }

  //Ottenuto l’id della traccia, passiamo alle API di spotify attraverso il nostro spotify service
  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAvBOvikykjyvMvUU3Q3RgFdwXzX1OYUqDixuVz55Gjk3gO_5Nf2LBaf6c8JXy-cxS3BUuUh0GWRtKERZByDK1VURR5bBW4vbHHDXAyroi4znlWDV2xj7qADX8SMxlKTM_4RBpcKxljdEoZFErFbLvvaf-d0r0'
    });
    return this.http.get(url, { headers });
  }

}

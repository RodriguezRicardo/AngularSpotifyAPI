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
        'Bearer BQAuzxnLBCH6A31v_77rFBKfd_nn_OmtmKfHaCP_MD3saXGJzFpHeXW9OeD4C0FZyF7OLLZKkLWifbmtOy_i6Mgx8LkQU4j4wGeOnAzJnWXRL-1KTcmk5661LRb7ThfzzYQy3EJIL2AB4DVVRl1PqzYJyMu9A3w'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;  //Ritorno observable(obsTracks) ai componenti che richiedono il servizio
  }
}

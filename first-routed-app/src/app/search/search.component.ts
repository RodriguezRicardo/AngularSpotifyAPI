import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'first-routed-app';
  query : string;
  obsTrack : Observable<Object>;
  results : any;

  //Inietto lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService) { }

  submit(query : HTMLInputElement) : void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
    //this.obsTrack.subscribe((data)=>console.log(data)); la ricerca su console viene visualizzata
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}

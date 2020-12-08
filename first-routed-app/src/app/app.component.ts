import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-routed-app';
  query : string;
  obsTrack : Observable<Object>;
  results : any;

  //Inietto lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService) {}

  submit(query : HTMLInputElement) : void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data);
    //this.obsTrack.subscribe((data)=>console.log(data)); la ricerca su console viene visualizzata
  }
}

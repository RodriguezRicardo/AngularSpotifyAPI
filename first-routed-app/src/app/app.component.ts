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
  obsTrack : Observable<Object>;

  //Inietto lo spotify service e faccio una ricerca
  constructor(public spotify : SpotifyService){
    this.obsTrack = spotify.searchTrack("goosebumps");
    this.obsTrack.subscribe((data)=>console.log(data)); //la ricerca su console viene visualizzata
  }
}

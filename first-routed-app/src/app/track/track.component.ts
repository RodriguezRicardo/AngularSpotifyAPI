import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  //Osserva gli eventi sulla route tracks, restituisce la ParamMap che contiene tutti i
  //parametri passati all’url
  routeObs : Observable<ParamMap>;
  track : any; //Salvo la traccia selezionata
  spotifyServiceObs;

  /*Usiamo la dependency injection per farci mandare i moduli del routing e dello SpotifyService*/
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : SpotifyService,
    private location : Location ) { }

  ngOnInit(): void {
    //Si ottiene observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let trackId = params.get('id');    //id della ParamMap
    console.log(trackId);

    this.spotifyServiceObs = this.service.getTrack(trackId);
    this.spotifyServiceObs.subscribe((data)=>this.track = data);
  }

  //per usare location bisogna iniettarlo nel costruttore del track component
  back() : void
  { this.location.back(); }

}

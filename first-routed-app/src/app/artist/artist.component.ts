import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  routeObs : Observable<ParamMap>;
  artist : any;
  spotifyServiceObs : Observable<Object>;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private service : SpotifyService,
    private location : Location ) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params : ParamMap) =>
  {
    let artistId = params.get('id');
    console.log(artistId);

    this.spotifyServiceObs = this.service.getArtistID(artistId);
    this.spotifyServiceObs.subscribe((data)=>this.artist = data);
  }

  back() : void
  { this.location.back(); }
}

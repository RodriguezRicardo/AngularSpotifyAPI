import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-album',
  templateUrl: './all-album.component.html',
  styleUrls: ['./all-album.component.css']
})
export class AllAlbumComponent implements OnInit {
  routeObs : Observable<ParamMap>;
  ALLalbum : any;
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

    this.spotifyServiceObs = this.service.getAllAlbum(artistId);
    this.spotifyServiceObs.subscribe((data)=>this.ALLalbum = data);
  }

  back() : void
  { this.location.back(); }

}

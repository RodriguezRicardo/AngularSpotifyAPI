import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

//Si scrivono le route
const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'search', component: SearchComponent},
  { path: 'tracks/:id', component: TrackComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full'},  //la home del nostro sito la pagina search
  { path : 'artists/:id', component: ArtistComponent},
  { path : 'albums/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

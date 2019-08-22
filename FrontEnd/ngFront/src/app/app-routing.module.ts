import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';

const routes: Routes = [
  {
    path: '',
    component: HomeBodyComponent
  },
  {
    path: 'songs',
    component: SongDetailsComponent
  },
  {
    path: 'home',
    redirectTo: 'HomeBodyComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

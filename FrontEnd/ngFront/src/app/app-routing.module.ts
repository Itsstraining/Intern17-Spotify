import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: AppComponent
  // },
  {
    path: 'songs',
    component: SongDetailsComponent
  },
  // {
  //   path: '',
  //   component: AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

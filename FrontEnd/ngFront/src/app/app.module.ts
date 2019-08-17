import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicControllerComponent } from './components/music-controller/music-controller.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import {MatIconModule} from '@angular/material/icon';
import { ApiComponent } from './components/api/api.component';
import { SongService } from './song.service'

@NgModule({
  declarations: [
    AppComponent,
    MusicControllerComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxAudioPlayerModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }

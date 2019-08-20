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
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SongService } from './song.service';
import { PlaySongServiceService } from './playSong_service/play-song-service.service';
import { MusicOverviewComponent } from './components/music-overview/music-overview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { SectionDividerComponent } from './components/section-divider/section-divider.component';
import { GetInfoService } from './getInfo_service/get-info.service';
import { LogomucsicComponent } from './components/logomucsic/logomucsic.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicControllerComponent,
    MusicOverviewComponent,
    SectionDividerComponent,
    LogomucsicComponent,
    SearchNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxAudioPlayerModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
  ],
  providers: [SongService, PlaySongServiceService, GetInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicControllerComponent } from './components/music-controller/music-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SongService } from './song.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PlaySongServiceService } from './playSong_service/play-song-service.service';
import { MusicOverviewComponent } from './components/music-overview/music-overview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { SectionDividerComponent } from './components/section-divider/section-divider.component';
import { GetInfoService } from './getInfo_service/get-info.service';
import { LogomucsicComponent } from './components/logomucsic/logomucsic.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';
import { environment } from 'src/environments/environment';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginmenuComponent } from './components/loginmenu/loginmenu.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { SongInfoComponent } from './components/song-info/song-info.component';
import { SongQueueComponent } from './components/song-queue/song-queue.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MusicControllerComponent,
    MusicOverviewComponent,
    SectionDividerComponent,
    LogomucsicComponent,
    SearchNavComponent,
    SidenavComponent,
    LoginmenuComponent,
    SongDetailsComponent,
    HomeBodyComponent,
    HomeBodyComponent,
    SongInfoComponent,
    SongQueueComponent,
    
  ],
  imports: [
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
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
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
  ],
  providers: [SongService, PlaySongServiceService, GetInfoService],
  bootstrap: [AppComponent]
})

export class AppModule {

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
  public songs = [
    {
      genre: 'pop',
      image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
      songName: 'test1111111111111111111111111',
      description: 'hhskjhfkjhjkhghjgbbfjjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjbrhkghkhrjhjkfsdhrhjhgjkhjshdjhflbkmldmlkmdkmklmdlkmfkdmblkmdfkdmldkmblkmdlkf',
      songID: '1',
      url: 'http://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/aade6bfe6dba84e4ddab/1304905352684140357?authen=exp=1566091359~acl=/aade6bfe6dba84e4ddab/*~hmac=d9fd6a48da1b00228856ed754681a35f&filename=HAPPY-BIRTHDAY-TO-YOU-Hayashibara-Megumi.mp3',
    },
    {
      genre: 'jazz',
      image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
      songName: 'test2',
      description: 'hh skjhfkjhjkh ghjgb bf jjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjb rhkghkhrjhjkfsdh rhjhgjkhjshdjhf',
      songID: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/ittsfy.appspot.com/o/Song%2FSong-Gio-Jack-K-ICM.mp3?alt=media&token=ef1d5c10-ed28-4e86-953e-289dee8341a5',
    },
    {
      genre: 'jazz',
      image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
      songName: 'test3',
      description: 'hh skjhfkjhjkh ghjgb bf jjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjb rhkghkhrjhjkfsdh rhjhgjkhjshdjhf',
      songID: '3',
      url: 'https://firebasestorage.googleapis.com/v0/b/ittsfy.appspot.com/o/Song%2FSong-Gio-Jack-K-ICM.mp3?alt=media&token=ef1d5c10-ed28-4e86-953e-289dee8341a5',
    },
  ]

  librarySongs = [];
  songDetail = [];

  getSongsInfo() {

    //API

    return this.songs;
  }


  displaySongByGenre(genre) {
    //API

    let songByGenre = this.songs.filter((element) => {
      return element.genre == genre.toLowerCase();
    });

    //Run the loop to utilize the API of getting song by genre (equal to get all the song displaying inside the body)
    // for (let song of songByGenre) {
    //   this.songs.push(song);
    // }

    for (let info of this.songs) {
      if (info.description.length > 60) {
        info.description = info.description.substring(0, 61);
      }
    }
    return songByGenre;
  }

  getSong(index) {
    for (let info in this.songs) {
      if (info == index) {
        return this.songs[index];
      }
    }
  }

  getSongInfo(index) {
    console.log("TCL: GetInfoService -> getSongInfo -> index", index);
    console.log("true");
    this.songDetail = [];
    this.songDetail.push(this.songs[index]);
    this.router.navigate(['/','songs']);
    return this.songDetail;
  }

  manipulateOnLib(index) {
    for (let song in this.songs) {
      if (song == index) {
        if (this.librarySongs.length == 0) {
          this.librarySongs.push(this.songs[song]);
          return 'added';
        }
        else {
          for (let libsong of this.librarySongs) {
            if (this.songs[song].songID == libsong.songID) {
              this.librarySongs.splice(this.librarySongs.indexOf(libsong), 1);
              return 'removed';
            }
          }
          this.librarySongs.push(this.songs[song]);
          return 'added';
        }
      }
    }
    //API
  }

  constructor(private router: Router) { }
}


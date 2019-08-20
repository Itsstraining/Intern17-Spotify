import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {
infos = []
  getSongInfo() {
    this.infos = [
      {
        image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
        songName: 'testtjfjjgjgjg',
        description: 'hhskjhfkjhjkhghjgbbfjjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjbrhkghkhrjhjkfsdhrhjhgjkhjshdjhf',
        songID: '1',
        url: 'http://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/aade6bfe6dba84e4ddab/1304905352684140357?authen=exp=1566091359~acl=/aade6bfe6dba84e4ddab/*~hmac=d9fd6a48da1b00228856ed754681a35f&filename=HAPPY-BIRTHDAY-TO-YOU-Hayashibara-Megumi.mp3',
      },
      {
        image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
        songName: 'test tjfjjgjgjgssssssssssssssssssssssssss',
        description: 'hh skjhfkjhjkh ghjgb bf jjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjb rhkghkhrjhjkfsdh rhjhgjkhjshdjhf',
        songID: '2',
        url: 'https://firebasestorage.googleapis.com/v0/b/ittsfy.appspot.com/o/Song%2FSong-Gio-Jack-K-ICM.mp3?alt=media&token=ef1d5c10-ed28-4e86-953e-289dee8341a5',
      },
    ];
  
    //API

    for (let info of this.infos) {
      if (info.description.length > 60) {
        info.description = info.description.substring(0, 61);
      }
    }
    return this.infos;
  }

  getSong(index) {
    for (let info in this.infos) {
      if (info == index) {
        console.log("true")
        console.log(this.infos[index]);
        return this.infos[index];
      }
    }
  }

  constructor() { }
}


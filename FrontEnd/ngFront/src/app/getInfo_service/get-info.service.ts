import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  getSongInfo() {
    let infos = [
      {
        image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
        name: 'testtjfjjgjgjgssssssssssssssssssssssssssgggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
        description: 'hhskjhfkjhjkhghjgbbfjjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjbrhkghkhrjhjkfsdhrhjhgjkhjshdjhf',
      },
      {
        image: 'https://doc-04-48-docs.googleusercontent.com/docs/securesc/v2c06rnfl7q09sbe0jl768br60fon31q/7qg668ecck7fd6h1jivsko0qk5us23ke/1566180000000/03076573627755738759/02573816330077391948/1d2bOVEMhsgO0cNg0_VTdKGANkV_fTl4x?e=download&h=12197798507535439673&nonce=71g2qmfjon4q4&user=02573816330077391948&hash=oa2tkkshr9v5de1dp691rm1betffk5f7',
        name: 'test tjfjjgjgjgssssssssssssssssssssssssss',
        description: 'hh skjhfkjhjkh ghjgb bf jjgfjhdgjkhkhkdjhkfjhk dhgjhkjhjkbjb rhkghkhrjhjkfsdh rhjhgjkhjshdjhf',
      }
    ];
    //API
    for (let info of infos) {
      if (info.description.length > 60) {
        info.description = info.description.substring(0, 61);
      }
    }
    return infos;
  }
  constructor() { }
}

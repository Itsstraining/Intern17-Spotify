import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SongService {

  getMusic() {
    let SongService = [];
    //API 
    SongService = [
      {
        title: 'test',
        link: 'http://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/aade6bfe6dba84e4ddab/1304905352684140357?authen=exp=1566091359~acl=/aade6bfe6dba84e4ddab/*~hmac=d9fd6a48da1b00228856ed754681a35f&filename=HAPPY-BIRTHDAY-TO-YOU-Hayashibara-Megumi.mp3',
      },
      {
        title: 'test3',
        link: 'https://firebasestorage.googleapis.com/v0/b/ittsfy.appspot.com/o/Song%2FSong-Gio-Jack-K-ICM.mp3?alt=media&token=ef1d5c10-ed28-4e86-953e-289dee8341a5',
      },
      {
        title: 'test2',
        link: 'https://vnso-zn-11-tf-mp3-s1-zmp3.zadn.vn/9e7b36f03fb4d6ea8fa5/7532931169943217428?authen=exp=1566100890~acl=/9e7b36f03fb4d6ea8fa5/*~hmac=63a13d77d39c8359a86c667e6a552c60&filename=HaHaHa-Thanh-Duy.mp3',
      },
      {
        title: 'test2',
        link: 'https://vnso-zn-11-tf-mp3-s1-zmp3.zadn.vn/9e7b36f03fb4d6ea8fa5/7532931169943217428?authen=exp=1566100890~acl=/9e7b36f03fb4d6ea8fa5/*~hmac=63a13d77d39c8359a86c667e6a552c60&filename=HaHaHa-Thanh-Duy.mp3',
      },
      {
        title: 'test2',
        link: 'https://vnso-zn-11-tf-mp3-s1-zmp3.zadn.vn/9e7b36f03fb4d6ea8fa5/7532931169943217428?authen=exp=1566100890~acl=/9e7b36f03fb4d6ea8fa5/*~hmac=63a13d77d39c8359a86c667e6a552c60&filename=HaHaHa-Thanh-Duy.mp3',
      },{
        title: 'test2',
        link: 'https://vnso-zn-11-tf-mp3-s1-zmp3.zadn.vn/9e7b36f03fb4d6ea8fa5/7532931169943217428?authen=exp=1566100890~acl=/9e7b36f03fb4d6ea8fa5/*~hmac=63a13d77d39c8359a86c667e6a552c60&filename=HaHaHa-Thanh-Duy.mp3',
      },
    ]
    return SongService;
  }

  getPlayList() {
    //API
    return
  }
  constructor(private client: HttpClient) { }
}

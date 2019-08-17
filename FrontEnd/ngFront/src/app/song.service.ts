import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SongService {

  getMusic() {
    let SongService: Object[];
    //API 
    
    return SongService;
  }

  getPlayList() {
    //API
    return
  }
  constructor(private client: HttpClient) { }
}

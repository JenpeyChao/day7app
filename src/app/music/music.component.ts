import { Component } from '@angular/core';
import { MusicService } from '../music.service';

import { response } from 'express';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  musicQueue:any = []
  song: string = '';
  constructor(private MusicService:MusicService){
    console.log(this.musicQueue)
  }

 

  findMusic(){
    console.log(this.song)
    this.MusicService.searchSong(this.song).subscribe(
      response =>{
        this.musicQueue.push(response);
      }
    )
  }
}

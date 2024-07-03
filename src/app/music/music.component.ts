import { Component } from '@angular/core';
import { MusicService } from '../music.service';



@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  musicQueue:any = [];
  song = '';
  currentlyPlaying:any
  constructor(private MusicService:MusicService){} 

  playNext(){
    this.musicQueue.splice(0,1);


  }

  findMusic(){
    console.log(this.song)
    console.log(this.musicQueue.length);
    this.MusicService.searchSong(this.song).subscribe(
      response =>{
        this.musicQueue.push(response);
        this.song = '';

      }
    );

  }
}

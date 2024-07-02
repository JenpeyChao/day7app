import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from './music.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl ="https://api.deezer.com/search"
  constructor(private http:HttpClient) { }
  searchSong(song:string): Observable<Root>{

    return this.http.get<Root>(`${this.apiUrl}?q=${song}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champion } from '../champion.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  private championsUrl = 'http://127.0.0.1:8081/listChampions';  // URL to web api
  private championUrl = 'http://127.0.0.1:8081/champion';
  
  constructor(private http: HttpClient) { }

  /** GET champions from the server */
  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championsUrl);
  }

  /** GET Champion by id */
  getChampion(id: number): Observable<Champion> {
    const url = `${this.championUrl}/${id}`;
    return this.http.get<Champion>(url);
  }
}

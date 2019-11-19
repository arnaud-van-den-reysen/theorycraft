import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'http://127.0.0.1:8081/listItems';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET items from the server */
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.itemsUrl);
  }
}

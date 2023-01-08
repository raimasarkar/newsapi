import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '901f9dc242254cd998d50bd8e9603fc6';
  
  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get<any>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=901f9dc242254cd998d50bd8e9603fc6');
  }
}
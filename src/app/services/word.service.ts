import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http : HttpClient) { }

  getAllWords() : Observable<any> {
    return this.http.get(API_URL+'/word', {responseType : 'json'});
  }

  getWord(word : string) : Observable<any> {
    return this.http.get(API_URL + '/word/' + word, {responseType : 'json'});
  }

  /*createWord(word : string) : Observable<any> {
    return this.http.get(API_URL + 'word/' + word, {responseType : 'json'});
  }

  updateWord(word : string) : Observable<any> {
    return this.http.get(API_URL + 'word/' + word, {responseType : 'json'});
  }*/

  removeWord(word : string) : Observable<any> {
    return this.http.delete(API_URL + 'word/' + word, {responseType : 'json'});
  }

}

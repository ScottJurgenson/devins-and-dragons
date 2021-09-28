import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from "./models/Character"
import { Terrain } from './models/terrain';

const baseUrl = 'http://localhost:3000'



@Injectable({
  providedIn: 'root'
})
export class DBQueryService {

  constructor(private http: HttpClient) { }

  private async request(method: string, url: string, data?: any, responseType?: any) {

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: responseType || 'json',
      observe: 'body',
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  createChar(char: Character) {
    console.log('createChar ' + JSON.stringify(char));
    return this.request('post', `${baseUrl}/char/create`, char);
  }

  getAllChar() {
    return this.request('get', `${baseUrl}/char`)
  }

  getAllTerrain() {
    return this.request('get', `${baseUrl}/terrain`)
  }


}

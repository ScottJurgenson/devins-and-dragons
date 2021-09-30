import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, throwError } from 'rxjs';

import { Character, charList } from './models/character';
import { Terrain } from './models/terrain';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DBQueryService {
  constructor(private http: HttpClient) {}
 

//TODO OBSERVABLES

//   createChar(char: Character) {
//     console.log('createChar ' + JSON.stringify(char));
//     return this.request('post', `${baseUrl}/char/create`, char);
//   }

//   updateChar(char: Character) {
//     console.log('createChar ' + JSON.stringify(char));
//     let id = char.id
//     return this.request('post', `${baseUrl}/char/update/${id}`, char);
//   }  

  getAllChar() {
    return this.http.get(`${baseUrl}/char`, {observe: 'body', responseType: 'json'});
  }

  getChar(id: string) {
    return this.http.get<Character>(`${baseUrl}/char/${id}`, {observe: 'body', responseType: 'json'});
  }

  deleteChar(id: string) {
    this.http.get(`${baseUrl}/char/delete/${id}`, {observe: 'body', responseType: 'json'});
  }

//   createTerrain(terrain: Terrain) {
//     console.log('createTerrain ' + JSON.stringify(terrain));
//     return this.request('post', `${baseUrl}/terrain/create`, terrain);
//   }

//   updateTerrain(terrain: Terrain) {
//     console.log('updateTerrain ' + JSON.stringify(terrain));
//     let id = terrain.id
//     return this.request('post', `${baseUrl}/terrain/update/${id}`, terrain);
//   }  

  getAllTerrain() {
    return this.http.get(`${baseUrl}/terrain`, {observe: 'body', responseType: 'json'});
  }

  getTerrain<Terrain>(id: string) {
    return this.http.get(`${baseUrl}/terrain/${id}`, {observe: 'body', responseType: 'json'});
  }

  deleteTerrain(id: string) {
    this.http.get(`${baseUrl}/terrain/delete/${id}`, {observe: 'body', responseType: 'json'});
  }
 }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TerrainService {

  // Observable string sources
  private terrain = new Subject<string>();

  // Observable string streams
  terrain$ = this.terrain.asObservable();

  // Service message commands
  setTerrain(terrain: string) {
    this.terrain.next(terrain);
  }

}
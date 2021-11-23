import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RollData } from '../models/rollData';

@Injectable({
    providedIn: 'root'
  })
export class RollService {

  // Observable string sources
  private roll = new Subject<string>();
  private rollData = new Subject<RollData>();

  // Observable string streams

  roll$ = this.roll.asObservable();
  rollData$ = this.rollData.asObservable();

  // Service message commands
  initiateRoll() {
    this.roll.next();
  }

  sendRollDataToParent(singlerollData: RollData){
    this.rollData.next(singlerollData);
  }

} 
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RollData } from '../models/rollData';
import { terrainSuccess, excelMod } from 'src/data/terrainSuccess';

@Injectable({
    providedIn: 'root'
  })
export class RollService {

  // Observable string sources
  private roll = new Subject<string>();
  private rollData = new Subject<RollData>();
  private rollResult = new Subject<string>();

  // Observable string streams

  roll$ = this.roll.asObservable();
  rollData$ = this.rollData.asObservable();
  rollResult$ = this.rollResult.asObservable();

  // Service message commands
  initiateRoll() {
    this.roll.next();
  }

  recieveRollData(singleRollData: RollData){
    this.parseRollResult(singleRollData)
  }

  parseRollResult(singleRollData){
    let playerName: string = singleRollData.char.charName;
    let action: string = singleRollData.action
    let rawRoll: number = this.rollD20()
    let modifier: number = singleRollData.modifier
    let rollTotal = rawRoll+modifier
    let success: string = this.determineSuccess(action, singleRollData.terrain, rollTotal) 
    this.rollResult.next(playerName + " " + success + " at " + action + " with a roll of " + rollTotal + " ("+rawRoll +modifier + ")")
  }

  rollD20(): number{
    return Math.floor(Math.random() * 20) + 1
  }

  determineSuccess(action: string, terrain: string, rollTotal: number): string{
    let successMin = terrainSuccess[terrain][action];
    let excelMin = successMin + excelMod[action]
    if (rollTotal >= excelMin){
      return "Excelled"
    }
    else if (rollTotal >= successMin){
      return "Succeeded"
    }
    else {
      return "Failed"
    }
  }

} 

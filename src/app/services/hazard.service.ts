import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { hazzardThreshold } from 'src/data/hazardRolls';

@Injectable({
  providedIn: 'root',
})
export class HazardService {
  private hazard = new Subject<String>();

  hazzard$ = this.hazard.asObservable();

  hazardCheck(terrain) {
    console.log('hazzard check called: ' + terrain);
    console.log(hazzardThreshold[terrain]);
    let d20Roll = Math.floor(Math.random() * 20) + 1;
    if (d20Roll <= hazzardThreshold[terrain]) {
      this.hazard.next(terrain + ' Hazard Encountered');
    } else {
      this.hazard.next('no hazzard');
    }
  }
}

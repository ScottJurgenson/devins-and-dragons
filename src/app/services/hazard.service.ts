import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class HazardService {
    private hazard = new Subject

    hazzard$ = this.hazard.asObservable();

    hazardCheck() {
        console.log("hazzard check called")
        this.hazard.next("no hazzard")
    }

  }

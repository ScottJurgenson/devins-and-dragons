import { Component } from '@angular/core';
import { DBQueryService } from './dbquery.service';
import { Character, charList } from './models/character';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharModalComponent } from './char-modal/char-modal.component';
import { TerrainService } from './services/terrain.service';
import { RollService } from './services/roll.service';
import { HazardService } from './services/hazard.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TerrainService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private rollSubscription: Subscription  
  title = 'devins-and-dragons';
  charList: Character[]
  resultArray: String[] = ["Results Here"]
  constructor(
    private dbQueryService: DBQueryService,
    private modalService: NgbModal,
    private terrainService: TerrainService,
    private rollService: RollService,
    private hazzardService: HazardService
      ) {

      
    this.rollSubscription = rollService.rollResult$.subscribe(
        rollData => {
          this.resultArray.push(rollData)
        }
      );
    }
   


  ngOnInit() {
    this.dbQueryService.getAllChar().subscribe((data: any) => {
      this.charList = data
    })
  }

  open() {
    const modalRef = this.modalService.open(CharModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  
  setTerrain(terrain){
    this.terrainService.setTerrain(terrain);
  }
  
  roll(){
    this.resultArray = [];
    this.hazzardService.hazardCheck();
    this.rollService.initiateRoll();
  }



  
}


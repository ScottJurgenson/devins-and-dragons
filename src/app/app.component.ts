import { Component, ChangeDetectorRef} from '@angular/core';
import { DBQueryService } from './dbquery.service';
import { Character, charList } from './models/character';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharModalComponent } from './char-modal/char-modal.component';
import { TerrainService } from './services/terrain.service';
import { RollService } from './services/roll.service';
import { HazardService } from './services/hazard.service';
import { Subscription } from 'rxjs';
import { collectExternalReferences } from '@angular/compiler';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TerrainService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedID = 'Nope';
  private rollSubscription: Subscription 
  private hazzardSubscription: Subscription
  title = 'devins-and-dragons';
  charList: Character[]
  resultArray: String[] = ["Results Here"]
  hazzardResult: String = "test"
  selectedTerrain: String = "road"
  
  constructor( 
    private dbQueryService: DBQueryService,
    private modalService: NgbModal,
    private terrainService: TerrainService,
    private rollService: RollService,
    private hazzardService: HazardService,
    private changeDetectorref: ChangeDetectorRef
      ) {

      
    this.rollSubscription = rollService.rollResult$.subscribe(
        rollData => {
          this.resultArray.push(rollData)
        }
      );
      this.hazzardSubscription = hazzardService.hazzard$.subscribe(
        data => this.hazzardResult= data
      )
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
    this.selectedTerrain = terrain
    this.terrainService.setTerrain(terrain);
  }

  updateDB() {
    this.dbQueryService.getAllChar().subscribe((data: any) => {
      this.charList = []
      this.ngOnInit()
    })
  }
  
  roll(){
    this.resultArray = [];
    this.rollService.initiateRoll();
    this.hazzardService.hazardCheck(this.selectedTerrain);
  }

}


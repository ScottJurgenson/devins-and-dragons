import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DBQueryService } from '../dbquery.service';
import { Character } from '../models/character';



@Component({
  selector: 'ngbd-char-modal',
  templateUrl: './char-modal.component.html',
  styleUrls: ['./char-modal.component.css'],
})
export class CharModalComponent {

  @Output()
  updateDBEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() char;

  closeResult = '';
  editMode: boolean = false
  charForm = new FormGroup({
    charName: new FormControl('', Validators.required),
    navigateTrackMod: new FormControl('', Validators.required),
    scoutMod: new FormControl('', Validators.required),
    huntForageMod: new FormControl('', Validators.required),
    mapMod: new FormControl('', Validators.required),
    entertainMod: new FormControl('', Validators.required),
    watchMod: new FormControl('', Validators.required),
  }
  );

  


  constructor(private dbQueryService: DBQueryService,private modalService: NgbModal) {}

  
  ngOnInit() {
    if (this.char.charname){
      this.editMode = true;
    }
  }
  open(content) {
      if (this.char != 'none'){
        console.log(this.char)
      this.charForm.setValue({
        charName: this.char.charName,
        navigateTrackMod: this.char.navigateTrackMod,
        scoutMod: this.char.scoutMod,
        huntForageMod: this.char.huntForageMod, 
        mapMod: this.char.mapMod,
        entertainMod: this.char.entertainMod,
        watchMod: this.char.watchMod,
       })
      }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if (this.char == 'none'){
      
      this.addChar()
      }
      else {
        this.updateChar()
      }
      this.updateDBEvent.emit();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  addChar() {
    if (this.charForm.valid){
      let newChar: Character = {    
        charName: this.charForm.value.charName,
        navigateTrackMod: this.charForm.value.navigateTrackMod,
        scoutMod: this.charForm.value.scoutMod,
        huntForageMod: this.charForm.value.huntForageMod,
        mapMod: this.charForm.value.mapMod,
        entertainMod: this.charForm.value.entertainMod,
        watchMod: this.charForm.value.watchMod,
      }
      this.dbQueryService.createChar(newChar).subscribe((data: any) => {
      })
    }
    else
      console.log("NO.K.")
  }

  updateChar(){
    
    if (this.charForm.valid){
      let updateChar: Character = {  
        id: this.char.id,  
        charName: this.charForm.value.charName,
        navigateTrackMod: this.charForm.value.navigateTrackMod,
        scoutMod: this.charForm.value.scoutMod,
        huntForageMod: this.charForm.value.huntForageMod,
        mapMod: this.charForm.value.mapMod,
        entertainMod: this.charForm.value.entertainMod,
        watchMod: this.charForm.value.watchMod,
      }
      this.dbQueryService.updateChar(updateChar).subscribe((data: any) => {
      })
  }
  }
}

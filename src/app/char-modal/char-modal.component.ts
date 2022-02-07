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
    survival: new FormControl('', Validators.required),
    dexterity: new FormControl('', Validators.required),
    perception: new FormControl('', Validators.required),
    intelligence: new FormControl('', Validators.required),
    charisma: new FormControl('', Validators.required),
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
        survival: this.char.survival,
        dexterity: this.char.dexterity,
        perception: this.char.perception, 
        intelligence: this.char.intelligence,
        charisma: this.char.charisma
       })
      }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
      this.onSubmit()
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


  onSubmit() {
    console.log(this.charForm)
    if (this.charForm.valid){
      let newChar: Character = {    
        charName: this.charForm.value.charName,
        survival: this.charForm.value.survival,
        dexterity: this.charForm.value.dexterity,
        perception: this.charForm.value.perception,
        intelligence: this.charForm.value.intelligence,
        charisma: this.charForm.value.charisma,
      }
      this.dbQueryService.createChar(newChar).subscribe((data: any) => {
      })
    }
    else
      console.log("NO.K.")
  }
}

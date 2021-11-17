import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DBQueryService } from '../dbquery.service';
import { Character } from '../models/character';


@Component({
  selector: 'app-char-modal',
  templateUrl: './char-modal.component.html',
  styleUrls: ['./char-modal.component.css'],
})
export class CharModalComponent {
  @Input() name;

  charForm = new FormGroup({
    charName: new FormControl('', Validators.required),
    survival: new FormControl('', Validators.required),
    dexterity: new FormControl('', Validators.required),
    perception: new FormControl('', Validators.required),
    intelligence: new FormControl('', Validators.required),
    charisma: new FormControl('', Validators.required),
  }
  );


  constructor(private dbQueryService: DBQueryService,public activeModal: NgbActiveModal) {}

  onSubmit() {
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

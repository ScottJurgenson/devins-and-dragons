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
    str: new FormControl('', Validators.required),
    dex: new FormControl('', Validators.required),
    con: new FormControl('', Validators.required),
    int: new FormControl('', Validators.required),
    wis: new FormControl('', Validators.required),
    cha: new FormControl('', Validators.required),
    strMod: new FormControl('', Validators.required),
    dexMod: new FormControl('', Validators.required),
    conMod:new FormControl('', Validators.required),
    intMod: new FormControl('', Validators.required),
    wisMod: new FormControl('', Validators.required),
    chaMod: new FormControl('', Validators.required)
    
  }
  );


  constructor(private dbQueryService: DBQueryService,public activeModal: NgbActiveModal) {}

  onSubmit() {
    if (this.charForm.valid){
      let newChar: Character = {    
        charName: this.charForm.value.charName,
        strength: this.charForm.value.str,
        dexterity: this.charForm.value.dex,
        constitution: this.charForm.value.con,
        intelligence: this.charForm.value.int,
        wisdom: this.charForm.value.wis, 
        charisma: this.charForm.value.cha,
        strengthMod: this.charForm.value.strMod,
        dexterityMod: this.charForm.value.dexMod,
        constitutionMod: this.charForm.value.conMod,
        intelligenceMod: this.charForm.value.intMod,
        wisdomMod: this.charForm.value.wisMod,
        charismaMod: this.charForm.value.chaMod
      }
      this.dbQueryService.createChar(newChar).subscribe((data: any) => {
      })
    }
    else
      console.log("NO.K.")
  }
}

import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../models/character';


@Component({
  selector: 'app-char-modal',
  templateUrl: './char-modal.component.html',
  styleUrls: ['./char-modal.component.css'],
})
export class CharModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  onClick() {
    console.log('Submit button was clicked!');
  }

  onSubmit() {
    console.log('Form was submitted!');
    //this.activeModal.close('Submit');
  }
}

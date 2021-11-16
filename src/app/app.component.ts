import { Component } from '@angular/core';
import { DBQueryService } from './dbquery.service';
import { Character, charList } from './models/character';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharModalComponent } from './char-modal/char-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'devins-and-dragons';
  charList = ''

  constructor(private dbQueryService: DBQueryService, private modalService: NgbModal ) {}

  ngOnInit() {
    this.dbQueryService.getAllChar().subscribe((data: any) => {
      this.charList = JSON.stringify(data)
      console.log("charlist:" + this.charList)
    })
  }

  open() {
    const modalRef = this.modalService.open(CharModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  

  

  
}


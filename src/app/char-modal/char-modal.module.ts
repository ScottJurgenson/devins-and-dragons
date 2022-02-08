import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CharModalComponent } from './char-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [CharModalComponent],
  exports: [CharModalComponent],
  bootstrap: [CharModalComponent]
})
export class NgbdModalBasicModule {}

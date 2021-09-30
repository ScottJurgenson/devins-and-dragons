import { Component } from '@angular/core';
import { DBQueryService } from './dbquery.service';
import { Character, charList } from './models/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'devins-and-dragons';
  charList = ''

  constructor(private dbQueryService: DBQueryService ) {}

  ngOnInit() {
    this.dbQueryService.getAllChar().subscribe((data: any) => {
      this.charList = JSON.stringify(data)
    })
  }

  

  

  
}


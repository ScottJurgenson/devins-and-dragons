import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  char: Character;

  constructor() {
   }

  ngOnInit(): void {
  }

}

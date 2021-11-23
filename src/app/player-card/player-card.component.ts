import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { TerrainService } from '../services/terrain.service';
import { Subscription } from 'rxjs';

import { Character } from '../models/character';
import { RollService } from '../services/roll.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  char: Character;
  selectedTerrain: string = "Road"
  action: string = "navigate/track"
  terrainSubscription: Subscription
  rollSubscription: Subscription
  terrainOptions = [
      { name: "Road", value: "Road" },
      { name: "Grass", value: "Grass" },
      { name: "River", value: "River" },
      { name: "Forest", value: "Forest" },
      { name: "Hill", value: "Hill" },
      { name: "Forest/Hill", value: "Forest/Hill" },
      { name: "Forest/Dense", value:"Forest/Dense" },
      { name: "Swamp", value: "Swamp" },
      { name: "Marsh", value: "Marsh" },
      { name: "Mountain", value: "Mountain" },
      { name: "Cliff", value: "Cliff" },
  ]


  constructor(private terrainService: TerrainService, private rollService: RollService) {
    this.terrainSubscription = terrainService.terrain$.subscribe(
      terrain => {
        this.selectedTerrain = terrain;
      }
    );
    this.rollSubscription = this.rollService.roll$.subscribe(
      roll => {
        this.rollService.recieveRollData({char: this.char, action: this.action, terrain: this.selectedTerrain, modifier: -1} );
      }
    );
   }

  ngOnInit(): void {
  }

  selectAction(action){
    this.action = action
 }

}

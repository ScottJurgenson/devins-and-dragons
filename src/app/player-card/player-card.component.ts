import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { TerrainService } from '../services/terrain.service';
import { Subscription } from 'rxjs';

import { Character } from '../models/character';
import { getParseErrors } from '@angular/compiler';
import { RollService } from '../services/roll.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  char: Character;
  terrain = "grass"
  terrainSubscription: Subscription
  rollSubscription: Subscription

  constructor(private terrainService: TerrainService, private rollService: RollService) {
    this.terrainSubscription = terrainService.terrain$.subscribe(
      terrain => {
        this.terrain = terrain;
      }
    );
    this.rollSubscription = this.rollService.roll$.subscribe(
      roll => {
        this.rollService.sendRollDataToParent({charName: "testName", action: "testAction", terrain: "testrain", modifier: -1} );
      }
    );
   }

  ngOnInit(): void {
  }

}

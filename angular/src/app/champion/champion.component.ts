import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';
import { Champion } from '../champion.model';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  champions: Champion[];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    this.championService.getChampions()
      .subscribe(champions => this.champions = champions);
  }

  
}

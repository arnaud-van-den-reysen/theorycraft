import { Component, OnInit, Input } from '@angular/core';
import { Champion } from '../champion.model';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.css']
})
export class ChampionDetailsComponent implements OnInit {

  @Input() champion: Champion;

  constructor() { }

  ngOnInit() {
  }

}

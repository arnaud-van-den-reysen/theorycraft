import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Champion } from '../champion.model';
import { ChampionService } from '../champion/champion.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {

  champion: Champion;

  constructor(private http: HttpClient,private route: ActivatedRoute,private championService: ChampionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.http.get<Champion>(`http://127.0.0.1:8081/champion/${id}`)
        .subscribe(data => { this.champion = data; });
    });
    // this.getChampion();
  }

  // getChampion(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.championService.getChampion(id)
  //     .subscribe(champion => this.champion = champion);
  // }
}

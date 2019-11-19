import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { ItemComponent } from './item/item.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionListComponent } from './champion-list/champion-list.component';


const routes: Routes = [
  { path: 'champion', component: ChampionComponent },
  { path: 'champion/:id', component: ChampionListComponent },
  { path: 'item', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

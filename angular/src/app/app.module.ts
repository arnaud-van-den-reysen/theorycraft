import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemComponent } from './item/item.component';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ItemComponent,
    ChampionDetailsComponent,
    ChampionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

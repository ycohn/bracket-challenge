import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FootballComponent } from './games/football/football.component';
import { SoccerComponent } from './games/soccer/soccer.component';
import { BracketComponent } from './bracket/bracket.component';
import { MatchComponent } from './match/match.component';
import { RowPipe } from './bracket/opponents.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    SoccerComponent,
    BracketComponent,
    MatchComponent,
    RowPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

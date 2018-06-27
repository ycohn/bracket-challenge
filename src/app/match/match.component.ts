import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  inputs: ['matchInfo', 'placement', 'tournamentWinner', 'sportType'],
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}

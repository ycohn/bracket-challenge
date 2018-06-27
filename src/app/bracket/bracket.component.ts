import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import {AppComponent} from '../app.component'


@Component({
  selector: 'sf-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.less'],
  inputs: ['sportType']
})

export class BracketComponent implements OnInit {
  matches = []
  Math = Math
  @Input() allMatches: any
  constructor() { }

  ngOnInit() {
   
  }

  ngOnChanges(){
    this.matches = traverse(this.allMatches)
  }

}

function traverse(node: any){
  var queue = [];
    var results = [];
    var nextNode;
    
    queue.push(
      { "depth": 0,
        "node" : node
      });
    
    while (queue.length > 0) {
      nextNode = queue.shift();
      if (nextNode.node.seedMatches.length > 0) {
        for (var i = 0; i < nextNode.node.seedMatches.length; i ++) {
          queue.push({ "depth": nextNode.depth+1,
            "node" : nextNode.node.seedMatches[i]
          });
        }
      }
      results.push(nextNode)
    }
    return results.reverse();
  };

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "row" })
export class RowPipe implements PipeTransform {
  // input is an array of any
  // mod is the modulo, every mod items, create a row
  transform(input: any[], mod: number): any[][] {
    let output = input.reduce((previous, next, index) => {
      if (index % mod === 0){
        previous.push([next])
      } else {
        previous[previous.length - 1].push(next);
      }
      if (index-1 == mod){
          mod = mod/2
      }   
      return previous;
    }, <any[][]>[]);
  console.log('this is output: ') 
  console.dir(output) 
  return output
  }
}
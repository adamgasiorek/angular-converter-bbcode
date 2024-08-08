import { Pipe, PipeTransform } from '@angular/core';
import bbCodeParser from 'js-bbcode-parser';

@Pipe({
  name: 'bbcode'
})
export class BbcodeConverterPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return bbCodeParser.parse(value);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'npxNgGPConvert'
})
export class NpxNgGPConvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

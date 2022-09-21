import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayFormat'
})
export class BirthdayFormatPipe implements PipeTransform {

  transform(value: Date): any {
    return new Date(value).toDateString().split(' ').slice(1).join(' ');
  }

}

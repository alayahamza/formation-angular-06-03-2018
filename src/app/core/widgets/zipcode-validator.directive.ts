import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {AppValidators} from '../util/app-validators';

@Directive({
  selector: '[appZipcode],input[zipcode]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: AppValidators.zipcode,
      multi: true
    }
  ],
})
export class ZipcodeValidatorDirective {

  constructor() {
  }

}

import {Directive, forwardRef, Input} from '@angular/core';
import {AppValidators} from '../util/app-validators';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  // [ngModel] to keep this validator working only with reactive forms (where we have ngModel)
  selector: '[appEmail],input[type=email][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ],
})
export class EmailValidatorDirective implements Validator {

  @Input() domain: string;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return AppValidators.email(this.domain)(control);
  }

}

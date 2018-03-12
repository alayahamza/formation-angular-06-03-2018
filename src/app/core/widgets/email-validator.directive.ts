import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AppValidators} from '../util/app-validators';

@Directive({
  selector: '[appEmail],input[type=email][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  @Input() domain: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return AppValidators.email(this.domain)(control);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../core/util/app-validators';

@Component({
  selector: 'app-cart-reactive',
  templateUrl: './cart-reactive.component.html',
  styleUrls: ['./cart-reactive.component.css']
})
export class CartReactiveComponent implements OnInit {

  submitted = false;

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.save();
    }
  }
  private save() {
    console.log(this.form.value);
  }
  isDisabled() {
    return this.form.invalid && this.submitted;
  }
  hasBillingAddress() {
    return this.form.value.hasBillingAddress;
  }
  toggleBillingAddress() {
    if (this.hasBillingAddress()) {
      this.billing = this.buildAddressGroup();
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.identity = this.fb.group({
      firstname: '',
      lastname: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }],
      email: ['', {
        validators: [
          AppValidators.email('gmail.com')
        ]
      }],
      phone: '',
    });
    this.shipping = this.buildAddressGroup();
    this.form = this.fb.group({
      identity: this.identity,
      shipping: this.shipping,
      hasBillingAddress: false
    });

    this.form.patchValue({
      identity: {
        firstname: 'Thierry',
        lastname: 'Chatel',
      },
      shipping: {
        city: 'Lunel',
      },
    });
  }
  private buildAddressGroup() {
    return this.fb.group({
      street: '',
      zipcode: ['', {
        validators: [
          Validators.required,
          AppValidators.zipcode
        ],
      }],
      city: ['', {
        validators: [
          Validators.required,
        ]
      }],
      country: '',
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../core/util/app-validators';

@Component({
  selector: 'app-cart-reactive',
  templateUrl: './cart-reactive.component.html',
  styleUrls: ['./cart-reactive.component.css']
})
export class CartReactiveComponent implements OnInit {

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  submitted = false;

  initialData: any;

  constructor() {
  }

  ngOnInit() {

    this.identity = new FormGroup(
      {
        firstname: new FormControl(),
        lastname: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(2)
          ]
        }),
        email: new FormControl('', {
          validators: [
            AppValidators.email('gmail.com')
          ]
        }),
        phone: new FormControl()
      }
    );


    this.shipping = this.buildAddressGroup();
    this.billing = this.buildAddressGroup();


    this.form = new FormGroup({
      identity: this.identity,
      shipping: this.shipping,
      billing: this.billing,
      hasBillingAddress: new FormControl(false)
    });

    // To initiate form with data from backend for example
    this.form.setValue({

      'identity': {
        'firstname': 'Hamza',
        'lastname': 'ALAYA',
        'email': 'alaya.hamza@gmail.com',
        'phone': '123456789'
      },
      'shipping': {
        'street': 'fghjk',
        'zipcode': '12378',
        'city': 'fghj',
        'country': 'fghj'
      },
      'billing': {
        'street': null,
        'zipcode': null,
        'city': null,
        'country': null
      },
      'hasBillingAddress': false
    });
  }

  buildAddressGroup() {
    return new FormGroup(
      {
        street: new FormControl(),
        zipcode: new FormControl('', {
          validators: [
            Validators.required,
            AppValidators.zipcode
          ]
        }),
        city: new FormControl('', {
          validators: [
            Validators.required
          ]
        }),
        country: new FormControl('', {
          validators: [
            Validators.required
          ]
        })
      }
    );
  }

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

  toogleBillingAddress() {
    if (this.hasBillingAddress()) {
      this.billing = this.buildAddressGroup();
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }
}

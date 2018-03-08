import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActionService} from '../../core/services/action.service';
import {FormGroup, NgForm} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {CountryService} from '../../core/services/country.service';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('formInfo') formInfo: NgForm;
  // @ViewChild(NgForm) formInfo2: NgForm;
  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: ''
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: ''
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: ''
    },
    hasBillingAddress: false
  };
  countries$: Observable<string[]>;

  constructor(public action: ActionService, private country: CountryService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initAutoComplete();
    }, 500);

  }

  initAutoComplete() {
    const addressGroup = this.formInfo.controls['shipping'] as FormGroup;
    const countryControl = addressGroup.controls['country1'];
    this.countries$ = countryControl.valueChanges.pipe(
      filter(name => name && name.length >= 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(name => this.country.search(name))
    );
  }

  log() {
    console.log(this.formInfo);
    // console.log(this.formInfo2);
  }

  save() {
    if (this.formInfo.valid) {
      console.log(this.data);
    }
  }

}

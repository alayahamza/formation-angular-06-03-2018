import {AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {CountryService} from '../../core/services/country.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('formInfo') formInfo: NgForm;

  countries$: Observable<string[]>;
  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    hasBillingAddress: false
  };

  save() {
    if (this.formInfo.valid) {
      console.log(this.data);
    }
  }
  log() {
    console.log(this.formInfo);
  }

  constructor(private country: CountryService) { }

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.initAutocomplete();
    });
  }

  private initAutocomplete() {
    const addressGroup = this.formInfo.controls['shipping'] as FormGroup;
    const countryControl = addressGroup.controls['country'];
    this.countries$ = countryControl.valueChanges.pipe(
      map(name => name && name.trim()),
      filter(name => name && name.length >= 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(name => this.country.search(name))
    );
  }

}

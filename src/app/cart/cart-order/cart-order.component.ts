import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionService} from '../../core/services/action.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {

  @ViewChild('formInfo') formInfo: NgForm;
  @ViewChild(NgForm) formInfo2: NgForm;
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
    }
  };

  constructor(public action: ActionService) {
  }

  ngOnInit() {
  }

  log() {
    console.log(this.formInfo);
    console.log(this.formInfo2);
  }

  save() {
    if (this.formInfo.valid) {
      console.log(this.data);
    }
  }

}

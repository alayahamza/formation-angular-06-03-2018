import {Component, ContentChild, Input, OnInit, Optional} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgControl) control: NgModel;

  get form() {
    return this.ngForm || this.formGroupDir;
  }

  // gonna look for NgForm in dependency graph
  // Optional : to avoid ecxeptions if ng form was found
  constructor(@Optional() public ngForm: NgForm,
              @Optional() public formGroupDir: FormGroupDirective) {
  }

  ngOnInit() {
  }

}

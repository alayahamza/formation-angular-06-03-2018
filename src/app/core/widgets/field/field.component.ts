import {Component, ContentChild, Input, OnInit, Optional, ViewChild} from '@angular/core';
import {FormGroupDirective, NgControl, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() label: string;

  @ContentChild(NgControl) control: NgControl;

  get form() {
    return this.ngForm || this.formGroupDir;
  }

  constructor(@Optional() public ngForm: NgForm,
              @Optional() public formGroupDir: FormGroupDirective) { }

  ngOnInit() {
  }

}

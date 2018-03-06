import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit, OnChanges {

  private _value: number
  @Input() set value(newRating: number) {
    this._value = newRating
    this.buildArray(newRating);
  }
  get value () {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<number>();
  stars: boolean[];
  buildArray(rating: number) {
    this.stars = [1, 2, 3, 4, 5]
      .map(i => i <= rating);

  }


  changeRating(index: number) {
    this.valueChange.emit(index + 1);
  }
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
/*    this.stars = [1, 2, 3, 4, 5]
      .map(i => i <= this.value);*/
  }

  enter(index: number) {
    this.buildArray(index + 1);
  }
  leave() {
    this.buildArray(this.value);
  }

  logRefresh() {
    console.log('refresh');
  }
}

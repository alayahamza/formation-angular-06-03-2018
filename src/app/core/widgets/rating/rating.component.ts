import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {

  private _value: number;

  @Input() set value(newRating: number) {
    this._value = newRating;
    this.buildArray(newRating);
  }

  @Output() valueChange = new EventEmitter<number>();
  stars: boolean[];

  constructor() {
  }

  ngOnInit() {
  }

  getValue() {
    return this._value;
  }

  changeRating(index: number) {
    this.valueChange.emit(index + 1);
  }

  private buildArray(rating: number) {
    this.stars = [1, 2, 3, 4, 5]
      .map(i => i <= rating);
  }

  enter(index: number) {
    this.buildArray(index + 1);
  }

  leave() {
    this.buildArray(this.getValue());
  }

  logRefresh() {
    console.log('refresh rating');
  }
}

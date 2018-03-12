import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RatingComponent} from './rating.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: '<app-rating [(value)]="rating"></app-rating>'
})
class ParentComponent {
  rating = 0;
}

fdescribe('RatingComponent', () => {
  let parentComponent: ParentComponent;
  let parentFixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent, ParentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(ParentComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should display ★★★☆☆', () => {
    parentComponent.rating = 3;
    parentFixture.detectChanges();
    const starts = parentFixture.debugElement
      .nativeElement
      .textContent
      .replace(/[^★,☆]/g, '');
    expect(starts).toEqual('★★★☆☆');
  });

  it('should change rating', () => {
    const stars = parentFixture.debugElement.queryAll(By.css('.star'));
    stars[3].triggerEventHandler('click', null);
    parentFixture.detectChanges();
    expect(parentComponent.rating).toEqual(4);
  });
});

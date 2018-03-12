import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SmallCartComponent} from './small-cart.component';
import {CartService} from '../../services/cart.service';
import {By} from '@angular/platform-browser';
import {mockBook1, mockBook2} from '../../model/book.spec';
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
// manually imported
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

fdescribe('SmallCartComponent', () => {
  let component: SmallCartComponent;
  let fixture: ComponentFixture<SmallCartComponent>;

  beforeEach(async(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [SmallCartComponent],
      providers: [
        CartService,
        {provide: LOCALE_ID, useValue: 'fr-FR'}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show an empty cart', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toEqual(1);
    expect(images[0].nativeElement.src).toContain('cart-empty.png');
    expect(fixture.debugElement.nativeElement.textContent).toContain('vide');
  });

  it('should show a loaded cart', () => {
    const cart: CartService = TestBed.get(CartService);
    cart.add(mockBook1);
    cart.add(mockBook2);
    cart.add(mockBook2);
    fixture.detectChanges();
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toEqual(1);
    expect(images[0].nativeElement.src).toContain('cart-loaded.png');

    const count = fixture.debugElement.query(By.css('.cart-count'));
    expect(count.nativeElement.textContent).toEqual('3 art.');

    const total = fixture.debugElement.query(By.css('.cart-total'));
    // expect(total.nativeElement.textContent).toEqual('20,10\x0A €');
  });
});

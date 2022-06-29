import { ElementRef } from '@angular/core';
import { BorderCardDirective } from './border-card.directive';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    let el!: ElementRef;
    const directive = new BorderCardDirective(el);
    expect(directive).toBeTruthy();
  });
});

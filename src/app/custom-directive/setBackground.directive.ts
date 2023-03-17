import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class setBackgroundDirective {
  constructor(private element: ElementRef) {
    this.element = element;
  }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}

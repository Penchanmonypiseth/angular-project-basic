import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'new-class');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'Title',
      'This ID using custom directive'
    );
  }
}

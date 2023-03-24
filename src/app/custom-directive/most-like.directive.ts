import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMostLike]',
})
export class MostLikeDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set appMostLike(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'most-like-active');
    }
  }
}

import { ElementRef, Renderer2, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverHostlistner]',
})
export class HoverHostlistnerDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') mouseHover() {
    this.renderer.addClass(this.element.nativeElement, 'mouse-hover');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.renderer.addClass(this.element.nativeElement, 'mouse-leave');
  }
}

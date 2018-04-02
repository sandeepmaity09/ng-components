import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgchanger]'
})
export class BgchangerDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    // this.ChangeBgColor('red');
  }

  @HostBinding('style.border') border: string;

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
  }

  /*
  @HostListener('mouseover') onMouseOver2() {
    this.border = '5px solid green';
  }
  */

  ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }



  @HostListener('click') onclick() {
    window.alert("I'm Clicked!")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
  }

}

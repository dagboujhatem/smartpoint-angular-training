import { Directive, ElementRef, Renderer2 } from '@angular/core';

// custom attribute derective
// using cc as a namespace of this directive

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
      // console.log('directive constructor');

    // using template reference variable
    // this.el.nativeElement.style.setProperty("background-color", "black", "important");
    // this.el.nativeElement.style.color= 'red';
    // with renderer service
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','black');
    this.renderer.setStyle(this.el.nativeElement,'color', 'red');
  }


}

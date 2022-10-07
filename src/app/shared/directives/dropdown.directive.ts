import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // * Directive used to add dropdown functionality to components
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const dropdownList =
      this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(dropdownList, 'show');
    } else {
      this.renderer.removeClass(dropdownList, 'show');
    }
  }
}

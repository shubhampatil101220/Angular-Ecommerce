import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor:string='#28282B';
  @HostBinding('style.border') border:string='none';
  @HostBinding('style.color') textColor:string='white';
  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor='white';
    this,this.textColor='#28282B';
    this.border='#28282B 3px solid';
  }
  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor='#28282B';
    this,this.textColor='white';
    this.border='none';
  }


}

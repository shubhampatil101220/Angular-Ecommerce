import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})

export class SetBackground implements OnInit{
    // private element : ElementRef;
    // private renderer: Renderer2;
    //     constructor(element:ElementRef,renderer:Renderer2){
    //       this.element=element;
    //       this.renderer=renderer;
    //     }
    //ShortCut way to ↑above the code↓
  
    constructor(private element:ElementRef,private renderer:Renderer2){

    }
    // @Input('setBackground') backColor:string='#36454f';
    // @Input() textColor:string='white';
    @Input('setBackground') changeTextAndBackColor: {backColor:string,textColor:string};
        ngOnInit(){
        //    this.element.nativeElement.style.backgroundColor='#36454f';
        //    this.element.nativeElement.style.color='white';
           this.renderer.setStyle(this.element.nativeElement, 'backgroundColor',this.changeTextAndBackColor.backColor);
            this.renderer.setStyle(this.element.nativeElement,'color',this.changeTextAndBackColor.textColor);
            // this.renderer.setAttribute(this.element.nativeElement,'title','Brand')
        }
}
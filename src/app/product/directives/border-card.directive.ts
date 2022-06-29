import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[productBorderCard]'
})
export class BorderCardDirective {

  private initColor: string ='#f5f5f5';
  private defaultColor: string='#009688'; 
  private defaultHeight: number = 180;
  
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initColor)
   }

   @Input('productBorderCard') borderColor!: string;
    
   @HostListener('mouseenter') onMouseEnter(){
     this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initColor)
   }
   
  private setHeight(height: number){
    let _height = height + "px";
    this.el.nativeElement.style.height = _height;
  }

  private setBorder(color: string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}

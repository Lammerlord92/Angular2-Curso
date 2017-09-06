import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[directivaTest]',
  host: {
    '(mousemove)': 'onMouseMove($event)'
  }
})

export class DirectivaTest {

  varRatonX=0;

  constructor(private el: ElementRef) {
      el.nativeElement.style.color='red';
  }

  onMouseMove(e:MouseEvent) { 
      console.log("almacenado="+this.varRatonX);
       console.log("X="+e.clientX);
    if(e.clientX<(this.varRatonX-5)){
         console.log("Menor");
        this.el.nativeElement.style.fontSizeText=this.el.nativeElement.style.fontSize.fontSizeText-"1px";
        this.varRatonX=e.clientX;
    }else  if(e.clientX>(this.varRatonX+5)){
        this.el.nativeElement.style.fontSizeText=this.el.nativeElement.style.fontSize+"1px";
        this.varRatonX=e.clientX;
        console.log("Mayor");
    };
    
    
  }
}
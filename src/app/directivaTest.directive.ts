import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[directivaTest]',
  host: {
//    '(click)': 'onClick($event)',
//    '(mouseleave)': 'onMouseLeave($event)',
//    '(mouseenter)': 'onMouseEnter($event)'
  }
})

export class DirectivaTest {
 /* @Input() color: string;
  @Input() colorMouse: string;
  @Input() texto: string;

  colores:any;
  textoTemp:string;
*/  

  constructor(private el: ElementRef) {
      //this.colores = { Azul: 'blue', Negro: 'black', Rojo: 'red', Verde: 'green' };
      el.nativeElement.style.color='red';
  }

/*  onClick() { 
  }

  onMouseEnter() { 
    this.el.nativeElement.style.color = this.colores[this.colorMouse];
    this.textoTemp = this.el.nativeElement.innerHTML;
    if (this.texto != '') this.el.nativeElement.innerHTML = this.texto;
  }
  onMouseLeave() { 
    this.el.nativeElement.style.color = this.colores[this.color];
    this.el.nativeElement.innerHTML = this.textoTemp;
  }
*/
}
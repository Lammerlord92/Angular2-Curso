import { Component, Input } from '@angular/core';

@Component({
    selector:'resultadoC',
    templateUrl: './resultado.component.html'
})

export class Resultado{
    @Input()  total:number;

    constructor(){
        this.total=0;
    }
}


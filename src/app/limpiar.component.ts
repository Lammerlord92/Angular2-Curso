import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'limpiaC',
    templateUrl: './limpiar.component.html'
})

export class LimpiaDatos{
    @Output() limpia=new EventEmitter();

    LimpiaDatos(){
        this.limpia.emit();
    }
}
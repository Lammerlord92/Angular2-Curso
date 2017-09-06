import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addDecimales' })

export class AddDecimales implements PipeTransform {
    constructor() {
    }

    transform(value: number, arg: number): string {
        let res="";
        let negativo=false;
        let numFiltrado=value;
        if(value<0){
            negativo=true; 
            numFiltrado=-value;
        }
        if(arg){
            res=numFiltrado.toFixed(arg);
        }else res=numFiltrado.toFixed(2);
        if(negativo){
            res="("+res+")";
        }
        return res;
    }
}
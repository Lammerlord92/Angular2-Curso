import {Component} from '@angular/core';

@Component({
    selector:'calculadora',
    templateUrl: './calculadora.component.html'
})

export class Calculadora{
    num1:string;
    num2:string;
    total:number;

    constructor(){
        this.total=0;
    }
    suma(){
        //También vale con parseFloat
        this.total=Number(this.num1)+Number(this.num2);
    } 
    resta(){
        this.total=Number(this.num1)-Number(this.num2);
    } 
    multiplica(){
        this.total=Number(this.num1)*Number(this.num2);
    } 
    divide(){
        this.total=Number(this.num1)/Number(this.num2);
    } 
}


import {Component} from '@angular/core';

@Component({
    selector:'calculadora',
    templateUrl: './calculadora.component.html'
})

export class Calculadora{
    num1:string;
    num2:string;
    totalC:number;

    constructor(){
        this.totalC=0;
    }
    suma(){
        //También vale con parseFloat
        this.totalC=Number(this.num1)+Number(this.num2);
    } 
    resta(){
        this.totalC=Number(this.num1)-Number(this.num2);
    } 
    multiplica(){
        this.totalC=Number(this.num1)*Number(this.num2);
    } 
    divide(){
        this.totalC=Number(this.num1)/Number(this.num2);
    } 
}


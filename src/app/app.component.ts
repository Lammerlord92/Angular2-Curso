import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            
              <h1>Hola {{name}}</h1>
              <h1 [innerHTML]="name"></h1>
              <button (click)="cambiarValor()">Cambiar</button>
              <br />
              <label>Nombre</label>
              <input [(ngModel)]="name" />

  `,
})
export class AppComponent  { 
  name = 'Angular';

  cambiarValor(){
    this.name="Mundo";
  } 
}

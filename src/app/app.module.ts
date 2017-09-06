import { NgModule }      from '@angular/core';
//Objeto que renderiza
import { BrowserModule } from '@angular/platform-browser';

//Si se añaden forms
import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
//Añadidas por usuario
import { ImagenesComponente }  from './imagenes.component';
import { Calculadora }  from './calculadora.component';
import { Resultado }  from './resultado.component';
import { LimpiaDatos } from './limpiar.component';
import { AddDecimales } from './addDecimales.pipe';
//imports: incluye en todos los componentes las importaciones añadidos
//bootstrap: elemento donde se inicia nuestra App.
//declarations: componentes de la app
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImagenesComponente, Calculadora,Resultado, LimpiaDatos, AddDecimales],
  bootstrap:    [ Calculadora ]
})

//Nombre debe coincider con el de main.ts
export class AppModule { }

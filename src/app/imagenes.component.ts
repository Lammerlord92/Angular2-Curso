import {Component} from '@angular/core';

@Component({
    selector:'imagenes',
    templateUrl: './imagenes.component.html'
})

export class ImagenesComponente{
    imgs=["https://www.softnet32.com/Files/2017/03/Firefox-app-free-download-326x245.jpg","http://globedia.com/imagenes/noticias/2013/6/5/puedo-eliminar-icono-celular-facebook_1_1720410.jpg","http://www.zehngames.com/wp-content/uploads/2015/01/seta-icono-new-super-mario-bros-wii-articulo-videojuegos-zehngames.png"];
    imgG:string;

    constructor(){
        this.imgG=this.imgs[0];
    }
    cambiaImagen(img:number){
        this.imgG=this.imgs[img];
    } 
}


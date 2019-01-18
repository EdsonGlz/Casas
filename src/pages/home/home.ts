import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CasaPage } from '../casa/casa';
import { c } from '@angular/core/src/render3';
import { CarritoPage } from '../carrito/carrito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  carrito=[];
  car=CarritoPage;
  casa=CasaPage;

  Casas = [
    {id: 0, color: "white", casa: "Barrio Analco (Barrio Analco)", Ciudad:"Tlajomulco", Colonia: "Cerro del tesoro", Antiguedad:"20", Recamaras: "5", Banos:"4" ,precio: "$ 3,900,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Analco.jpg", numero: "(871) 178 5027"},
    {id: 1, color: "white", casa: "Valle Real", Ciudad:"Guadalajara", Colonia: "Valle Real", Antiguedad:"5", Recamaras: "6", Banos:"7" ,precio: "$ 9,200,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/ValleReal.jpg", numero: "(871) 178 5027"},
    {id: 2, color: "white", casa: "Armandina", Ciudad:"Tlajomulco", Colonia: "Armandina", Antiguedad:"20", Recamaras: "4", Banos:"3" ,precio: "$ 5,000,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Armandina.jpeg", numero: "(871) 178 5027"},
    {id: 3, color: "white", casa: "Casa Fuerte (coto El Baluarte)", Ciudad:"Tlajomulco", Colonia: "Casa Fuerte", Antiguedad:"6", Recamaras: "5", Banos:"4" ,precio: "$ 6,700,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/CasaFuerte.jpg", numero: "(871) 178 5027"},
    {id: 4, color: "white", casa: "Bosques de la Victoria", Ciudad:"Zapopan", Colonia: "Bosques de la Victoria", Antiguedad:"30", Recamaras: "5", Banos:"6" ,precio: "$ 9,000,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Bosques.jpg", numero: "(871) 178 5027"},
    {id: 5, color: "white", casa: "Tesoro y Colon", Ciudad:"Tlaquepaque", Colonia: "Cerro del tesoro", Antiguedad:"10", Recamaras: "3", Banos:"2" ,precio: "$ 3,900,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Tesoro y Colon.jpg", numero: "(871) 178 5027"},
    {id: 6, color: "white", casa: "Altamira", Ciudad:"Zapopan", Colonia: "Altamira", Antiguedad:"7", Recamaras: "5", Banos:"5" ,precio: "$ 1,735,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Altamira.jpg", numero: "(871) 178 5027"},
    {id: 7, color: "white", casa: "Armandina", Ciudad:"Tlajomulco", Colonia: "Amandinda", Antiguedad:"20", Recamaras: "4", Banos:"3" ,precio: "$ 1,050,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Tesistan.jpg", numero: "(871) 178 5027"},
    {id: 8, color: "white", casa: "Tesistan Country", Ciudad:"Tesistan ", Colonia: "Country", Antiguedad:"5", Recamaras: "4", Banos:"3" , precio: "$ 1,335,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/TesistanCountry.jpg", numero: "(871) 178 5027"},
    {id: 9, color: "white", casa: "Departamento Bugambilias", Ciudad:"Tlajomulco", Colonia: "Bugambilias", Antiguedad:"20", Recamaras: "2", Banos:"2" , precio: "$ 1,450,000.00", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Bugambilias.jpg", numero: "(871) 178 5027"}


];



  constructor(public navCtrl: NavController) {



  
  }

  clickCasa(c){
    this.navCtrl.push(this.casa, {casa: c, carrito: this.carrito});  
  }

  clickCarrito(){
  this.navCtrl.push(this.car, {carrito: this.carrito});
  }

}

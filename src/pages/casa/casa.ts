import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CasaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa',
  templateUrl: 'casa.html',
})
export class CasaPage {

  casa;
  carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa = this.navParams.get("casa");
    this.carrito = this.navParams.get("carrito");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CasaPage');
  }

  clickCarrito(){
    this.carrito.push(this.casa);
    this.navCtrl.pop();

  }

}

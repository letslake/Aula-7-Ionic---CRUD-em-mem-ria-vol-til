import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cars = [
    {
      id: 1,
      ano: 2015,
      marca: 'Honda',
      modelo: 'Civic' 
    },
    {
      id: 2,
      ano: 2013,
      marca: 'Toyota',
      modelo: 'Corolla' 
    },
    {
      id: 3,
      ano: 2009,
      marca: 'Fiat',
      modelo: 'Palio' 
    },
  ]

  constructor( public navCtrl: NavController) {

  }

  onItemClick (car) {
    this.navCtrl.push ('DetailPage', {carParam: car});  
  }

}

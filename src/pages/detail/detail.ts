import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pharmacie} from "../../model/Pharmacie";
import {Medoc} from "../../model/Medoc";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public medoc: Medoc;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medoc=navParams.get("med");
    console.log(this.medoc);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}

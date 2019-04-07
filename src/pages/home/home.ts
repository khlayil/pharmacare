import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { style } from '@angular/core/src/animation/dsl';
import {Pharmacie} from "../../model/Pharmacie";
import {Medoc} from "../../model/Medoc";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  public medocs: Medoc[] = [];
  public  pharmacie:Pharmacie;
  public  pharmacie1:Pharmacie;
  public  pharmacie2:Pharmacie;
  public  pharmacie3:Pharmacie;
  public  pharmacie4:Pharmacie;
  public pharmacies: Pharmacie[] = [];
  public pharmacies1: Pharmacie[] = [];
  public pharmacies2: Pharmacie[] = [];
  public pharmacies3: Pharmacie[] = [];


  constructor(public navCtrl: NavController) {
    // @ts-ignore

    this.pharmacie=new Pharmacie(1,"al marabet","tunis")
    this.pharmacie1=new Pharmacie(2,"para pharmasie","ariana")
    this.pharmacie2=new Pharmacie(3,"el hana","ben arouss")
    this.pharmacie3=new Pharmacie(4,"farmazi","marsa")
    this.pharmacie4=new Pharmacie(5,"farmavi","mourouj")



    this.pharmacies=[this.pharmacie,this.pharmacie1]
    this.pharmacies1=[this.pharmacie2,this.pharmacie1]
    this.pharmacies3=[this.pharmacie2,this.pharmacie1,this.pharmacie3,this.pharmacie4]


    this.medocs=[
      {"id_medoc":1,"name":"doliprane","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies},
      {"id_medoc":2,"name":"clamoxile","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies1},
      {"id_medoc":3,"name":"maxilase","description":"very good for health","stock":"Out Of Stock","pharmacies":this.pharmacies2},
      {"id_medoc":4,"name":"fervex","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies3}
    ]
  }
  private initializeItems() {
    this.pharmacie=new Pharmacie(1,"al marabet","tunis")
    this.pharmacie1=new Pharmacie(2,"para pharmasie","ariana")
    this.pharmacie2=new Pharmacie(3,"el hana","ben arouss")
    this.pharmacie3=new Pharmacie(4,"farmazi","marsa")
    this.pharmacie4=new Pharmacie(5,"farmavi","mourouj")



    this.pharmacies=[this.pharmacie,this.pharmacie1]
    this.pharmacies1=[this.pharmacie2,this.pharmacie1]
    this.pharmacies3=[this.pharmacie2,this.pharmacie1,this.pharmacie3,this.pharmacie4]


    this.medocs=[
      {"id_medoc":1,"name":"doliprane","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies},
      {"id_medoc":2,"name":"clamoxile","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies1},
      {"id_medoc":3,"name":"maxilase","description":"very good for health","stock":"Out Of Stock","pharmacies":this.pharmacies2},
      {"id_medoc":4,"name":"fervex","description":"very good for health","stock":"In Stock","pharmacies":this.pharmacies3}
    ]
  }

  getItems(ev) {
    this.initializeItems();

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.medocs = this.medocs.filter((item) => {
        return (item.name.indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goDetails(Medoc)
  {
    this.navCtrl.push(DetailPage, {med:Medoc});
  }

}

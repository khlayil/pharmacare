import {Pharmacie} from "./Pharmacie";

export class Medoc {
  public id_medoc:number;
  public name:string;
  public description:string;
  public stock:string;
  public pharmacies: Pharmacie[] = [];


  constructor(id_medoc: number, name: string, description: string, stock: string, pharmacies: Pharmacie[]) {
    this.id_medoc = id_medoc;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.pharmacies = pharmacies;
  }

}



export class Pharmacie {
  public id_pharmacie:number;
  public name:string;
  public location:string;


  constructor(id_pharmacie: number, name: string, location: string) {
    this.id_pharmacie = id_pharmacie;
    this.name = name;
    this.location = location;
  }
}

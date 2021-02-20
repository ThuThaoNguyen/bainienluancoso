import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Kiemtras } from './app-kiemtra';
@Injectable({
  providedIn: 'root'
})
export class AppKiemtraService {
  private dbPath = '/Kiemtra';
  kiemtraRef: AngularFireList<Kiemtras> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.kiemtraRef = db.list(this.dbPath);
 
   }
   getkiemtraList(): AngularFireList<Kiemtras> {
    return this.kiemtraRef;
  }
   createkiemtra(kiemtra: Kiemtras): void {
    this.kiemtraRef.push(kiemtra);
  }
}

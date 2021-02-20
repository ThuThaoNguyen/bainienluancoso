import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Cauhois } from './app-cauhoi';

@Injectable({
  providedIn: 'root'
})
export class AppCauhoiService {
  private dbPath = '/cauhoi';
 
  cauhoiRef: AngularFireList<Cauhois> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.cauhoiRef = db.list(this.dbPath);
  }
  getcauhoiList(): AngularFireList<Cauhois> {
      return this.cauhoiRef;
    }
  createcauhoi(cauhoi: Cauhois): void {
      this.cauhoiRef.push(cauhoi);
    }
  
}

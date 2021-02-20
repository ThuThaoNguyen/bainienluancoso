import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { baitap } from './app-baitap';
 
@Injectable({
  providedIn: 'root'
})
export class baitapService {
 
  private dbPath = '/tailieu';
 
  baitapRef: AngularFireList<baitap> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.baitapRef = db.list(this.dbPath);
  }
 
 /* createCustomer(customer: Customer): void {
    this.customersRef.push(customer);
  }*/
 
  updatebaitap(key: string, value: any): Promise<void> {
    return this.baitapRef.update(key, value);
  }
 /*
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  } */
 
 
  getbaitapList(): AngularFireList<baitap> {
    return this.baitapRef;
  }
 
  /*deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }*/
}
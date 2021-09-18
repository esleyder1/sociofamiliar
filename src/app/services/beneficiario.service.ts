import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import beneficiario from '../models/beneficiario.model';

@Injectable({
  providedIn: 'root',
})
export class beneficiarioService {
  private dbPath = '/beneficiarios';

  beneficiariosRef: AngularFirestoreCollection<beneficiario>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.beneficiariosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<beneficiario> {
    return this.beneficiariosRef;
  }

  create(beneficiario: beneficiario): any {
    return this.beneficiariosRef.add({ ...beneficiario });
  }

  update(id: string, data: any): Promise<void> {
    return this.beneficiariosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.beneficiariosRef.doc(id).delete();
  }
  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}

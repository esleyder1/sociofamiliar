import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import ninio from '../models/ninio.model';

@Injectable({
  providedIn: 'root'
})
export class ninioService {
  private dbPath = '/ninios';

  niniosRef: AngularFirestoreCollection<ninio>;

  constructor(private db: AngularFirestore) {
    this.niniosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<ninio> {
    return this.niniosRef;
  }

  create(ninio: ninio): any {
    return this.niniosRef.add({ ...ninio });
  }

  update(id: string, data: any): Promise<void> {
    return this.niniosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.niniosRef.doc(id).delete();
  }
}

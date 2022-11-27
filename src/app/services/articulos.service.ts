import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private firestore: Firestore) { }

  addArticulo(articulo: Articulo) {
    const ref = collection(this.firestore, 'Articulos');
    return addDoc(ref, articulo);
  }

  getArticulo(): Observable<Articulo[]> {
    const ref = collection(this.firestore, 'Articulos');
    return collectionData(ref, { idField: 'id' }) as Observable<Articulo[]>;
  }

  deleteArticulo(articulo: Articulo) {
    const ClientDocRef = doc(this.firestore, `Articulos/${articulo.id}`);
    return deleteDoc(ClientDocRef);
  }

  updateArticulo(articulo: Articulo) {
    const ClientDocRef = doc(this.firestore, `Articulos/${articulo.id}`);
    // return updateDoc();
  }
}

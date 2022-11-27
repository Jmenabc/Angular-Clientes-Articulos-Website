import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private firestore: Firestore) {}

  addCliente(cliente: Cliente) {
    const ref = collection(this.firestore, 'Clientes');
    return addDoc(ref, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    const ref = collection(this.firestore, 'Clientes');
    return collectionData(ref, { idField: 'id' }) as Observable<Cliente[]>;
  }
}

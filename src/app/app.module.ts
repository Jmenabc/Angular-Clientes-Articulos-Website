import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesDetallesComponent } from './components/clientes-detalles/clientes-detalles.component';
import { AddClientesComponent } from './components/add-clientes/add-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientesComponent,
    ClientesDetallesComponent,
    AddClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

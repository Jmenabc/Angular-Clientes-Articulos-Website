import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientesComponent } from './components/add-clientes/add-clientes.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'crear', component: AddClientesComponent },
  { path: 'clientes/:id', component: ClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

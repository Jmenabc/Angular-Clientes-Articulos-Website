import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  clientes?: Cliente[];
  constructor(private cService: ClientesService) {}

  async delete(cliente: Cliente) {
    const response = await this.cService.deleteCliente(cliente);
    console.log(response);
  }

  ngOnInit(): void {
    this.cService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}

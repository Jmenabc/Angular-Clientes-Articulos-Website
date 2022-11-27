import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css'],
})
export class AddClientesComponent {
  formulario: FormGroup;
  constructor(private cService: ClientesService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      email: new FormControl(),
      addres: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.cService.addCliente(this.formulario.value);
    console.log(response);
  }
}

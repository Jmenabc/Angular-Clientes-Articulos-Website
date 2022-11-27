import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-add-articulos',
  templateUrl: './add-articulos.component.html',
  styleUrls: ['./add-articulos.component.css'],
})
export class AddArticulosComponent {
  formulario: FormGroup;
  constructor(private aService: ArticulosService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      familia: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
    });
  }

  ngOnInit(): void {}
  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.aService.addArticulo(this.formulario.value);
    console.log(response);
  }
}

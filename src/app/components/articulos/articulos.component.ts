import { Component } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
  articulos?: Articulo[];
  constructor(private aService: ArticulosService) {}

  async delete(articulo: Articulo) {
    const response = await this.aService.deleteArticulo(articulo);
    console.log(response);
  }

  ngOnInit(): void {
    this.aService.getArticulo().subscribe((articulos) => {
      this.articulos = articulos;
    });
  }
}

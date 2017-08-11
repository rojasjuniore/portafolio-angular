import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {
  producto: any = undefined;
  id: string;
  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) {

    this._activatedRoute
      .params
      .subscribe(params => {
        this._productosService
          .cargar_producto(params['id'])
          .subscribe(data => {
            this.producto = data.json();
            this.id = params['id'];
            console.log(this.producto);
          });
      })
  }
}

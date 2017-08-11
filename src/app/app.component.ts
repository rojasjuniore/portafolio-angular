import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _informacionService: InformacionService,
    private _productosService: ProductosService
  ) {

  }
}

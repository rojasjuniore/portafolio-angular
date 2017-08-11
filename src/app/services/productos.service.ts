import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando_productos = true;

  constructor(private _http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {
    this.cargando_productos = true;
    this._http.get('https://paginaweb-89488.firebaseio.com/productos_idx.json')
      .subscribe(data => {
        this.productos = data.json();
        this.cargando_productos = false;
        console.log(this.productos);
      });

  }
}

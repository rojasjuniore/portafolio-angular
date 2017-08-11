import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router'

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrado: any[] = [];
  producto: any[] = [];
  cargando_productos = true;

  constructor(private _http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {

    let promesa = new Promise((resolve, reject) => {
      this.cargando_productos = true;
      this._http.get('https://paginaweb-89488.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          this.productos = data.json();
          this.cargando_productos = false;
          resolve();
        });
    });

    return promesa;

  }

  public cargar_producto(id: string) {
    const url = `https://paginaweb-89488.firebaseio.com/productos/${id}/.json`;
    return this._http.get(url);
  }

  public buscar_produtos(termino: string) {
    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        //termino de carga
        this.filtrar_producto(termino);
      })
    } else {
      this.filtrar_producto(termino);
    }

  }

  public filtrar_producto(termino: string) {
    this.productos_filtrado = [];
    termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.toLowerCase().indexOf(termino) >= 0
        || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod)
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styles: []
})
export class SearhComponent implements OnInit {

  termino: string = undefined;
  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductosService) {
    this._activatedRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this._productosService.buscar_produtos(this.termino);
    })
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  constructor(private _activatedRoute: ActivatedRoute) {

    this._activatedRoute
      .params
      .subscribe(params => {
        console.log(params);
        console.log(params['id']);
      })
  }


}

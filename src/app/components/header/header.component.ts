import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public _informacionService: InformacionService, private _router: Router) { }

  buscar_prouducto(termino: string) {
    this._router.navigate(['buscar', termino]);
  }

}

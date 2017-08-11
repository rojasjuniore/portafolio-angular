import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  cargada = false;
  constructor(public _http: Http) {

    this._http.get('assets/data/info.pagina.json')
      .subscribe(data => {
        console.log(data.json());
        this.info = data.json();
        this.cargada = true;
      });
  }

}

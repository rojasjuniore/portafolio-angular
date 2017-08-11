import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  equipo: any[] = [];
  cargada = false;
  cargada_sobre_nosotros = false;
  constructor(public _http: Http) {
    this.carga_info();
    this.cargaSobreNosotros();
  }

  carga_info() {
    this._http.get('assets/data/info.pagina.json')
      .subscribe(data => {
        this.info = data.json();
        this.cargada = true;
      });
  }

  cargaSobreNosotros() {
    this._http.get('https://paginaweb-89488.firebaseio.com/equipo.json')
      .subscribe(data => {
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
        console.log(this.equipo);
      });
  }

}

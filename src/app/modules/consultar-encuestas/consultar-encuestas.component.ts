import { Component, OnInit } from '@angular/core';
import {Zona} from '../../models/zona';
import {ZonaService} from '../../services/zona.service';

@Component({
  selector: 'app-consultar-encuestas',
  templateUrl: './consultar-encuestas.component.html',
  styleUrls: ['./consultar-encuestas.component.scss']
})
export class ConsultarEncuestasComponent implements OnInit {
    zonas: Zona[] = [];
  constructor(
      private zonaService: ZonaService
  ) { }

  ngOnInit(): void {
      this.consultarZonas();
  }

  consultarZonas(): void {
      this.zonaService.getZonas().subscribe((item) => {
          if(item.cod === 0) {
              this.zonas = item.data;
          }
      });
  }

}

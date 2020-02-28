import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pagina-pesquisa',
  templateUrl: './pagina-pesquisa.component.html',
  styleUrls: ['./pagina-pesquisa.component.css']
})
export class PaginaPesquisaComponent implements OnInit {
  cidades: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.q) {
        this.pesquisar(params.q);
      }
    });
  }
  pesquisar(cidade) {
    this.weatherService
      .procurarCidade(cidade)
      .pipe(
        map(cidades => this.cidades),
        catchError((err, obs) => {
          console.log(err);
          return of([]);
        })
      )
      .subscribe(cidades => (this.cidades = cidades));
  }
}

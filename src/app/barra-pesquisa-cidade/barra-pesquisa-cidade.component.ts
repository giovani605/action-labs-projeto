import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa-cidade',
  templateUrl: './barra-pesquisa-cidade.component.html',
  styleUrls: ['./barra-pesquisa-cidade.component.css']
})
export class BarraPesquisaCidadeComponent implements OnInit {
  cidades: any[] = [];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.pesquisar('Curitiba');
  }

  pesquisar(cidade) {
    this.weatherService.procurarCidade(cidade).subscribe(cidades => {
      debugger;
      this.cidades = cidades.list;
    });
  }
}

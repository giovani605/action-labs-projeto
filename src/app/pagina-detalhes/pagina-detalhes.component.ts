import { Weather } from './../classes/weather.class';
import { Tempo } from './../classes/tempo.class';
import { Forecast } from './../classes/forecast.class';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-detalhes',
  templateUrl: './pagina-detalhes.component.html',
  styleUrls: ['./pagina-detalhes.component.css']
})
export class PaginaDetalhesComponent implements OnInit {
  dadosForecast: any[];

  dataAtual = new Date();

  tempo: Tempo = {
    weather: [],
    sys: { country: null },
    main: { temp: null }
  };

  constructor(
    private weatherService: WeatherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.weatherService.tempoAtualCidade(params.id).subscribe(dados => {
        this.tempo = dados;
      });
      this.weatherService.previsaoTempoCidade(params.id).subscribe(dados => {
        console.log(dados);
        this.dadosForecast = dados.list;
      });
    });
  }
}

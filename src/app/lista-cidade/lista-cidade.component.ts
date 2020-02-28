import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.css']
})
export class ListaCidadeComponent implements OnInit {
  @Input()
  cidades: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}

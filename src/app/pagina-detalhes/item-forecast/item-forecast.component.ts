import { Forecast } from './../../classes/forecast.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-forecast',
  templateUrl: './item-forecast.component.html',
  styleUrls: ['./item-forecast.component.css']
})
export class ItemForecastComponent implements OnInit {
  @Input()
  forecast?: Forecast;

  constructor() {}

  ngOnInit(): void {}
}

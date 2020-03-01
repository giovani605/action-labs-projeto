import { HttpParams } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from './../services/weather.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa-cidade',
  templateUrl: './barra-pesquisa-cidade.component.html',
  styleUrls: ['./barra-pesquisa-cidade.component.css']
})
export class BarraPesquisaCidadeComponent implements OnInit {
  stringBusca = '';

  @Input()
  flag;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  pesquisar() {
    this.router.navigate(['/search'], { queryParams: { q: this.stringBusca } });
  }
}

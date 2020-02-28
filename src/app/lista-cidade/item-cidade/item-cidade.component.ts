import { Cidade } from './../../classes/cidade.class';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cidade',
  templateUrl: './item-cidade.component.html',
  styleUrls: ['./item-cidade.component.css']
})
export class ItemCidadeComponent implements OnInit {
  @Input()
  cidade: Cidade;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirecionar() {
    this.router.navigate(['details/' + this.cidade.id]);
  }
}

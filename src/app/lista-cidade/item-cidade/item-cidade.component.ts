import { Cidade } from './../../classes/cidade.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-cidade',
  templateUrl: './item-cidade.component.html',
  styleUrls: ['./item-cidade.component.css']
})
export class ItemCidadeComponent implements OnInit {
  @Input()
  cidade: Cidade;

  constructor() {}

  ngOnInit(): void {}
}

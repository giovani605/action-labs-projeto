import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.css']
})
export class IconeComponent implements OnInit {
  @Input()
  icon;
  constructor() {}

  ngOnInit(): void {}

  urlIcon() {
    return 'https://openweathermap.org/img/w/' + this.icon + '.png';
  }
}

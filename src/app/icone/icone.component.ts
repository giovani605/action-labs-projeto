import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icone',
  templateUrl: './icone.component.html',
  styleUrls: ['./icone.component.css']
})
export class IconeComponent implements OnInit {
  @Input()
  icon;

  @Input()
  flag ? = false;
  constructor() {}

  ngOnInit(): void {}

  urlIcon() {
    if (!this.flag) {
      return 'https://openweathermap.org/img/w/' + this.icon + '.png';
    } else {
      return (
        'http://openweathermap.org/images/flags/' +
        this.icon.toLowerCase() +
        '.png'
      );
    }
  }
}

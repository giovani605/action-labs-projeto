import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto-actions-labs';
  flag = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        if (evt.url.includes('/search') || evt.urlAfterRedirects.includes('/search')) {
          this.flag = true;
        } else {
          this.flag = false;
        }
      }
    });
  }
  voltar() {
    this.router.navigate(['/search']);
  }
}

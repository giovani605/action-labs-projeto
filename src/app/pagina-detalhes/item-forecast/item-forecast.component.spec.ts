import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemForecastComponent } from './item-forecast.component';

describe('ItemForecastComponent', () => {
  let component: ItemForecastComponent;
  let fixture: ComponentFixture<ItemForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

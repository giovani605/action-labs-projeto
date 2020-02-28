import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCidadeComponent } from './lista-cidade.component';

describe('ListaCidadeComponent', () => {
  let component: ListaCidadeComponent;
  let fixture: ComponentFixture<ListaCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

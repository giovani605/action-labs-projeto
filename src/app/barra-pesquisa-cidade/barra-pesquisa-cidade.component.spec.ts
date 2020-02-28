import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaCidadeComponent } from './barra-pesquisa-cidade.component';

describe('BarraPesquisaCidadeComponent', () => {
  let component: BarraPesquisaCidadeComponent;
  let fixture: ComponentFixture<BarraPesquisaCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPesquisaCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPesquisaCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

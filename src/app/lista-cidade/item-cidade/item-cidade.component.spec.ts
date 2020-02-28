import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCidadeComponent } from './item-cidade.component';

describe('ItemCidadeComponent', () => {
  let component: ItemCidadeComponent;
  let fixture: ComponentFixture<ItemCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

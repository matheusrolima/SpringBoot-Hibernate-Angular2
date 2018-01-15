import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAvaliacaoComponent } from './buscar-avaliacao.component';

describe('BuscarAvaliacaoComponent', () => {
  let component: BuscarAvaliacaoComponent;
  let fixture: ComponentFixture<BuscarAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

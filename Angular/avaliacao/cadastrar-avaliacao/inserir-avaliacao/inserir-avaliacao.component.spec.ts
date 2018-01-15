import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAvaliacaoComponent } from './inserir-avaliacao.component';

describe('InserirAvaliacaoComponent', () => {
  let component: InserirAvaliacaoComponent;
  let fixture: ComponentFixture<InserirAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

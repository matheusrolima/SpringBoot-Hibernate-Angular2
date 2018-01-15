import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAvaliacaoComponent } from './cadastrar-avaliacao.component';

describe('CadastrarAvaliacaoComponent', () => {
  let component: CadastrarAvaliacaoComponent;
  let fixture: ComponentFixture<CadastrarAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarregarTurmasComponent } from './carregar-turmas.component';

describe('CarregarTurmasComponent', () => {
  let component: CarregarTurmasComponent;
  let fixture: ComponentFixture<CarregarTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarregarTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarregarTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

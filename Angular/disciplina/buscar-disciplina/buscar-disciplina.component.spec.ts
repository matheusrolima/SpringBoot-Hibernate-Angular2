import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDisciplinaComponent } from './buscar-disciplina.component';

describe('BuscarDisciplinaComponent', () => {
  let component: BuscarDisciplinaComponent;
  let fixture: ComponentFixture<BuscarDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

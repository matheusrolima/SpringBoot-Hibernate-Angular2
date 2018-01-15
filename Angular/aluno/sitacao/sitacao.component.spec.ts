import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitacaoComponent } from './sitacao.component';

describe('SitacaoComponent', () => {
  let component: SitacaoComponent;
  let fixture: ComponentFixture<SitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

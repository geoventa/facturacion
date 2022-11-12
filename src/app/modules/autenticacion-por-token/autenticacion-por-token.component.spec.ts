import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionPorTokenComponent } from './autenticacion-por-token.component';

describe('AutenticacionPorTokenComponent', () => {
  let component: AutenticacionPorTokenComponent;
  let fixture: ComponentFixture<AutenticacionPorTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionPorTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacionPorTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

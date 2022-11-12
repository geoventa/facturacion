import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEncuestadorComponent } from './ver-encuestador.component';

describe('VerEncuestadorComponent', () => {
  let component: VerEncuestadorComponent;
  let fixture: ComponentFixture<VerEncuestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEncuestadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEncuestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

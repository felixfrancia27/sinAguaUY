import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPasosComponent } from './experiencia-pasos.component';

describe('ExperienciaPasosComponent', () => {
  let component: ExperienciaPasosComponent;
  let fixture: ComponentFixture<ExperienciaPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReporteServicioComponent } from './reporte-servicio.component';

describe('ReporteServicioComponent', () => {
  let component: ReporteServicioComponent;
  let fixture: ComponentFixture<ReporteServicioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

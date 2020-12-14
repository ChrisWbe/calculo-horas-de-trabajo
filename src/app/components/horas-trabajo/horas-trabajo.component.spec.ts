import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HorasTrabajoComponent } from './horas-trabajo.component';

describe('HorasTrabajoComponent', () => {
  let component: HorasTrabajoComponent;
  let fixture: ComponentFixture<HorasTrabajoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

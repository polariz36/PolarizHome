
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhDashboardComponent } from './ph-dashboard.component';

describe('PhDashboardComponent', () => {
  let component: PhDashboardComponent;
  let fixture: ComponentFixture<PhDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

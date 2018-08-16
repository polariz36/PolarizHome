import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhFormComponent } from './ph-form.component';

describe('PhFormComponent', () => {
  let component: PhFormComponent;
  let fixture: ComponentFixture<PhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

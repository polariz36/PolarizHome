
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PhNavComponent } from './ph-nav.component';

describe('PhNavComponent', () => {
  let component: PhNavComponent;
  let fixture: ComponentFixture<PhNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [PhNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

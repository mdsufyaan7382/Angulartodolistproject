import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltaskbyuserComponent } from './viewalltaskbyuser.component';

describe('ViewalltaskbyuserComponent', () => {
  let component: ViewalltaskbyuserComponent;
  let fixture: ComponentFixture<ViewalltaskbyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewalltaskbyuserComponent]
    });
    fixture = TestBed.createComponent(ViewalltaskbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

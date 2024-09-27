import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsIntroComponent } from './signals-intro.component';

describe('SignalsIntroComponent', () => {
  let component: SignalsIntroComponent;
  let fixture: ComponentFixture<SignalsIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsIntroComponent]
    });
    fixture = TestBed.createComponent(SignalsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

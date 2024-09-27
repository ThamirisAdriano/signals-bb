import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushDemoComponent } from './on-push-demo.component';

describe('OnPushDemoComponent', () => {
  let component: OnPushDemoComponent;
  let fixture: ComponentFixture<OnPushDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnPushDemoComponent]
    });
    fixture = TestBed.createComponent(OnPushDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

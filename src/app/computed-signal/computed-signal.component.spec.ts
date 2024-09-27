import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignalComponent } from './computed-signal.component';

describe('ComputedSignalComponent', () => {
  let component: ComputedSignalComponent;
  let fixture: ComponentFixture<ComputedSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputedSignalComponent]
    });
    fixture = TestBed.createComponent(ComputedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

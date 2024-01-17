import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginAndRegisterComponent } from './form-login-and-register.component';

describe('FormLoginAndRegisterComponent', () => {
  let component: FormLoginAndRegisterComponent;
  let fixture: ComponentFixture<FormLoginAndRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormLoginAndRegisterComponent]
    });
    fixture = TestBed.createComponent(FormLoginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

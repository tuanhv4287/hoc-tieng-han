import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoaHocComponentComponent } from './khoa-hoc-component.component';

describe('KhoaHocComponentComponent', () => {
  let component: KhoaHocComponentComponent;
  let fixture: ComponentFixture<KhoaHocComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhoaHocComponentComponent]
    });
    fixture = TestBed.createComponent(KhoaHocComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

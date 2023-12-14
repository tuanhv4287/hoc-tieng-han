import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoaHocComponent } from './khoa-hoc.component';

describe('KhoaHocComponent', () => {
  let component: KhoaHocComponent;
  let fixture: ComponentFixture<KhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

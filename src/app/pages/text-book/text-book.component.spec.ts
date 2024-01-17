import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBookComponent } from './text-book.component';

describe('TextBookComponent', () => {
  let component: TextBookComponent;
  let fixture: ComponentFixture<TextBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextBookComponent]
    });
    fixture = TestBed.createComponent(TextBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

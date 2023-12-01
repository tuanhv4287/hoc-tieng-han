import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMenuComponent } from './title-menu.component';

describe('TitleMenuComponent', () => {
  let component: TitleMenuComponent;
  let fixture: ComponentFixture<TitleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

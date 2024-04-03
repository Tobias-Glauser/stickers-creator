import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundStylingComponent } from './background-styling.component';

describe('ColorStylingComponent', () => {
  let component: BackgroundStylingComponent;
  let fixture: ComponentFixture<BackgroundStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

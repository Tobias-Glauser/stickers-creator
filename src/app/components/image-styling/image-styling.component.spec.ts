import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStylingComponent } from './image-styling.component';

describe('ImageStylingComponent', () => {
  let component: ImageStylingComponent;
  let fixture: ComponentFixture<ImageStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageStylingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

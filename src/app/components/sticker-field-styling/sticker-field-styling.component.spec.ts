import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StickerFieldStylingComponent} from './sticker-field-styling.component';

describe('StickerFieldConfigComponent', () => {
  let component: StickerFieldStylingComponent;
  let fixture: ComponentFixture<StickerFieldStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerFieldStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerFieldStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

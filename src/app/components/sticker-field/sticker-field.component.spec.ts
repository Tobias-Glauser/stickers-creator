import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerFieldComponent } from './sticker-field.component';

describe('StickerFieldComponent', () => {
  let component: StickerFieldComponent;
  let fixture: ComponentFixture<StickerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

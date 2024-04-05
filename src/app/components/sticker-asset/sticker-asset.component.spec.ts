import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerAssetComponent } from './sticker-asset.component';

describe('StickerAssetComponent', () => {
  let component: StickerAssetComponent;
  let fixture: ComponentFixture<StickerAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerAssetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

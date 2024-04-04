import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StickerFieldConfigComponent} from './sticker-field-config.component';

describe('StickerFieldConfigComponent', () => {
  let component: StickerFieldConfigComponent;
  let fixture: ComponentFixture<StickerFieldConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerFieldConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerFieldConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

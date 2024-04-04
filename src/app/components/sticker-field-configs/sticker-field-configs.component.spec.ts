import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerFieldConfigsComponent } from './sticker-field-configs.component';

describe('StickerFieldConfigsComponent', () => {
  let component: StickerFieldConfigsComponent;
  let fixture: ComponentFixture<StickerFieldConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerFieldConfigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerFieldConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

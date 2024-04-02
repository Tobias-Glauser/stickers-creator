import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerGeneratorComponent } from './sticker-generator.component';

describe('StickerGeneratorComponent', () => {
  let component: StickerGeneratorComponent;
  let fixture: ComponentFixture<StickerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

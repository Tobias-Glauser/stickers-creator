import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerGenerationFormComponent } from './sticker-generation-form.component';

describe('StickerGenerationFormComponent', () => {
  let component: StickerGenerationFormComponent;
  let fixture: ComponentFixture<StickerGenerationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerGenerationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StickerGenerationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

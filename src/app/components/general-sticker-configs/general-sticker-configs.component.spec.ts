import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStickerConfigsComponent } from './general-sticker-configs.component';

describe('GeneralStickerConfigsComponent', () => {
  let component: GeneralStickerConfigsComponent;
  let fixture: ComponentFixture<GeneralStickerConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralStickerConfigsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralStickerConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

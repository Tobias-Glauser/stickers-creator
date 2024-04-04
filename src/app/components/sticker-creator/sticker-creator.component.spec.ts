import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StickerCreatorComponent} from './sticker-creator.component';

describe('StickerCreatorComponent', () => {
  let component: StickerCreatorComponent;
  let fixture: ComponentFixture<StickerCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickerCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickerCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

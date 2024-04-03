import { TestBed } from '@angular/core/testing';

import { StickerSizeService } from './sticker-size.service';

describe('StickerSizeService', () => {
  let service: StickerSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickerSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

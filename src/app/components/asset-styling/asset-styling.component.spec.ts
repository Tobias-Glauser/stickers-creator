import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssetStylingComponent} from './asset-styling.component';

describe('ColorStylingComponent', () => {
  let component: AssetStylingComponent;
  let fixture: ComponentFixture<AssetStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

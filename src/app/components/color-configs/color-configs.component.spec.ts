import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorConfigsComponent} from './color-configs.component';

describe('ColorComponent', () => {
  let component: ColorConfigsComponent;
  let fixture: ComponentFixture<ColorConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorConfigsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

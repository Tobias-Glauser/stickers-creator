import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePositionComponent } from './choose-position.component';

describe('ChoosePositionComponent', () => {
  let component: ChoosePositionComponent;
  let fixture: ComponentFixture<ChoosePositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

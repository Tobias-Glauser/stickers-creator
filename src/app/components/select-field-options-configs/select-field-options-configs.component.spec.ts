import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectFieldOptionsConfigsComponent} from './select-field-options-configs.component';

describe('SelectFieldOptionsConfigsComponent', () => {
  let component: SelectFieldOptionsConfigsComponent;
  let fixture: ComponentFixture<SelectFieldOptionsConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFieldOptionsConfigsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFieldOptionsConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

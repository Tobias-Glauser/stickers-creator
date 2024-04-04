import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FieldCommonsConfigsComponent} from './field-commons-configs.component';

describe('FieldCommonsConfigsComponent', () => {
  let component: FieldCommonsConfigsComponent;
  let fixture: ComponentFixture<FieldCommonsConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldCommonsConfigsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCommonsConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

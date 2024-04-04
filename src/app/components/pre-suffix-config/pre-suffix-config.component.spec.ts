import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreSuffixConfigComponent} from './pre-suffix-config.component';

describe('PresuffixconfigComponent', () => {
  let component: PreSuffixConfigComponent;
  let fixture: ComponentFixture<PreSuffixConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreSuffixConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreSuffixConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

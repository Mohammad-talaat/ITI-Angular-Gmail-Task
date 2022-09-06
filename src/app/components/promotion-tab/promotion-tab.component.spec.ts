import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTabComponent } from './promotion-tab.component';

describe('PromotionTabComponent', () => {
  let component: PromotionTabComponent;
  let fixture: ComponentFixture<PromotionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

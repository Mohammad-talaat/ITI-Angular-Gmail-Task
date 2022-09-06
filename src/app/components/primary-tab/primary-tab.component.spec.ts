import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryTabComponent } from './primary-tab.component';

describe('PrimaryTabComponent', () => {
  let component: PrimaryTabComponent;
  let fixture: ComponentFixture<PrimaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

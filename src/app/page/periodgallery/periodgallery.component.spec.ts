import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodgalleryComponent } from './periodgallery.component';

describe('PeriodgalleryComponent', () => {
  let component: PeriodgalleryComponent;
  let fixture: ComponentFixture<PeriodgalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodgalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

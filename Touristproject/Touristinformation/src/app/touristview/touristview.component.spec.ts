import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristviewComponent } from './touristview.component';

describe('TouristviewComponent', () => {
  let component: TouristviewComponent;
  let fixture: ComponentFixture<TouristviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

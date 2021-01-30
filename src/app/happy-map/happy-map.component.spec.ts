import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyMapComponent } from './happy-map.component';

describe('HappyMapComponent', () => {
  let component: HappyMapComponent;
  let fixture: ComponentFixture<HappyMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

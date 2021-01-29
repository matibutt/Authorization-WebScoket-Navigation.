import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventgridComponent } from './eventgrid.component';

describe('EventgridComponent', () => {
  let component: EventgridComponent;
  let fixture: ComponentFixture<EventgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

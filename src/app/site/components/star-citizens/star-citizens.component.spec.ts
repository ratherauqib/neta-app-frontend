import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarCitizensComponent } from './star-citizens.component';

describe('StarCitizensComponent', () => {
  let component: StarCitizensComponent;
  let fixture: ComponentFixture<StarCitizensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarCitizensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarCitizensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

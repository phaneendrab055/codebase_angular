import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFiltersComponent } from './saved-filters.component';

describe('SavedFiltersComponent', () => {
  let component: SavedFiltersComponent;
  let fixture: ComponentFixture<SavedFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

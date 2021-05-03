import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseListingComponent } from './browse-listing.component';

describe('BrowseListingComponent', () => {
  let component: BrowseListingComponent;
  let fixture: ComponentFixture<BrowseListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

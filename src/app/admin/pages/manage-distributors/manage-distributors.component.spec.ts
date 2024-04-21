import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDistributorsComponent } from './manage-distributors.component';

describe('ManageDistributorsComponent', () => {
  let component: ManageDistributorsComponent;
  let fixture: ComponentFixture<ManageDistributorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDistributorsComponent]
    });
    fixture = TestBed.createComponent(ManageDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

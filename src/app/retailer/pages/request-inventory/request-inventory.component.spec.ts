import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInventoryComponent } from './request-inventory.component';

describe('RequestInventoryComponent', () => {
  let component: RequestInventoryComponent;
  let fixture: ComponentFixture<RequestInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestInventoryComponent]
    });
    fixture = TestBed.createComponent(RequestInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

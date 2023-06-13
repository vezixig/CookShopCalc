import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeIconComponent } from './product-type-icon.component';

describe('ProductTypeIconComponent', () => {
  let component: ProductTypeIconComponent;
  let fixture: ComponentFixture<ProductTypeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypeIconComponent]
    });
    fixture = TestBed.createComponent(ProductTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './../product.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductFormComponent } from './product-form.component';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let testBedService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedService = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

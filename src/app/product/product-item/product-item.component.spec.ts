import { ProductService } from './../product.service';
import { Product } from './../product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let testBedService : ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent 
     ], 
     imports: [RouterTestingModule, HttpClientTestingModule], 
     providers: [ProductService,
        {provide: ActivatedRoute, 
        useValue: {
          snapshot: {paramMap: {get: () => "qwerty"}}
        }}
     ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    testBedService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

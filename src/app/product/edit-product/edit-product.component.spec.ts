import { ProductService } from './../product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { EditProductComponent } from './edit-product.component';
import { By } from '@angular/platform-browser';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  let testBedService: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule], 
     providers: [ProductService,
        {provide: ActivatedRoute, 
         useValue: {
          snapshot: {paramMap: {get: () => "qwerty"}}
        }}
     ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EditProductComponent);
    testBedService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

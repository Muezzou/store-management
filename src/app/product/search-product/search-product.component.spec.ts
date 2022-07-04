import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './../product.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchProductComponent } from './search-product.component';

describe('SearchProductComponent', () => {
  let component: SearchProductComponent;
  let fixture: ComponentFixture<SearchProductComponent>;
  let testBedService : ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchProductComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProductComponent);
    testBedService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

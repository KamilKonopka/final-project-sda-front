import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;

  constructor(private productsApi: ProductsApiService) { }

  ngOnInit(): void {
    console.log('products initialized');
    this.products$ = this.productsApi.getProducts();
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }
}

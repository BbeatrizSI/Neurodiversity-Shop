import { Component, OnInit, inject, Input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent implements OnInit {
  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;
  
  @Input() id!: string;  // Se usa `@Input()` en lugar de `input.required`

  constructor(private productDetailStateService: ProductDetailStateService) {}

  ngOnInit(): void {
    if (this.id) {
      this.productDetailState.getById(this.id);
    }
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1
    });
  }
}

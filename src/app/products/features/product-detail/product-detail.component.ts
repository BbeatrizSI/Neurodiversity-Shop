import { Component, OnInit, inject, Input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent implements OnInit {
  productDetailState = inject(ProductDetailStateService).state;
  
  @Input() id!: string;  // Se usa `@Input()` en lugar de `input.required`

  constructor(private productDetailStateService: ProductDetailStateService) {}

  ngOnInit(): void {
    if (this.id) {
      this.productDetailState.getById(this.id);
    }
  }
}

import { Component, input } from '@angular/core';
import { Product } from '../../../shared/intefaces/product.inteface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
}

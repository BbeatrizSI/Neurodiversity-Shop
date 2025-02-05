import { Component, inject } from '@angular/core';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { CartItemComponent } from './ui/cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state;
}

import { Component, ElementRef, QueryList, ViewChildren, inject, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { Product } from '../../../shared/interfaces/product.interface';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService]
})
export default class ProductListComponent implements AfterViewChecked {
  productsState = inject(ProductsStateService);
  cartState = inject(CartStateService).state;
  private cdr = inject(ChangeDetectorRef);

  @ViewChildren('productCard', { read: ElementRef }) productCards!: QueryList<ElementRef>; 

  private ultimaTarjetaVisible: ElementRef | null = null;
  private isChangingPage = false;

  ngAfterViewChecked() {
    if (this.isChangingPage) {
      this.cdr.detectChanges(); // 🔹 Forzar la actualización del DOM

      setTimeout(() => {
        requestAnimationFrame(() => {
          const tarjetas = this.productCards.toArray();
          if (tarjetas.length > 0) {
            this.ultimaTarjetaVisible = tarjetas[tarjetas.length - 1];

            // 🔹 Verificar si la tarjeta tiene dimensiones válidas
            const rect = this.ultimaTarjetaVisible.nativeElement.getBoundingClientRect();
            console.log('Coordenadas de la última tarjeta después de renderizar:', rect);

            if (rect.height > 0 && rect.width > 0) {
              this.ultimaTarjetaVisible.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              console.log('Scrolling con scrollIntoView()...');
            } else {
              console.warn('La tarjeta aún no tiene dimensiones, esperando más...');
            }
          }
        });
      }, 300); // 🔹 Aumentamos el tiempo para asegurar renderización
      this.isChangingPage = false;
    }
  }

  changePage() {
    // Capturar la última tarjeta antes de cargar más productos
    const tarjetas = this.productCards.toArray();
    if (tarjetas.length > 0) {
      this.ultimaTarjetaVisible = tarjetas[tarjetas.length - 1]; 
    }

    const page = this.productsState.state.page() + 1;
    this.productsState.changePage$.next(page);
    this.isChangingPage = true;
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1
    });
  }
}

import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/intefaces/product.inteface";
import { map, startWith, switchMap } from "rxjs/operators";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from "./products.service";
import { Subject } from "rxjs/internal/Subject";

interface State {
    products: Product[];
    status: 'loading' | 'success' | 'error';
    page: number
}

@Injectable()
export class ProductsStateService {

    private productsService = inject(ProductsService);
    private initialState: State = {
        products: [],
        status: 'loading' as const,
        page: 1
    }

    changePage$ = new Subject<number>();

    loadProducts$ = this.changePage$.pipe(
        startWith(1),
        switchMap((page) => this.productsService.getProducts(page)),
        map((products) => ({ products, status: 'success' as const }))
    );
    
    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.changePage$.pipe(
                map((page) => ({ page, status: 'loading' as const }))
            ),
            this.loadProducts$
        ]
    })
}
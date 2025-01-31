import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/intefaces/product.inteface";
import { map } from "rxjs/operators";
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from "./products.service";

interface State {
    products: Product[];
    status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductsStateService {

    private productsService = inject(ProductsService);
    private initialState: State = {
        products: [],
        status: 'loading' as const
    }

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productsService
               .getProducts()
               .pipe(map((products) => ({ products, status: 'success' as const }))),
        ]
    })
}
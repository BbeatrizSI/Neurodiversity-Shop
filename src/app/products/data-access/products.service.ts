import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-hhtp.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interfaces/product.interface";

const limit = 5

@Injectable({providedIn: 'root'})
export class ProductsService extends BaseHttpService {
    getProducts(page: number): Observable<Product[]> {
        return this.http.get<any[]>(`${this.apiUrl}/products`, {
            params: { 
                limit: page * limit 
            }
        });
    }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
    }
}
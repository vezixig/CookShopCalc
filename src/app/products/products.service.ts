import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, catchError, throwError } from 'rxjs';
import { Item } from 'src/models/Item';

const HTTP_OPTIONS = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    getProducts(): Observable<Item[]> {
        return this.http.get<Item[]>('http://localhost:3000/products').pipe(catchError(this.handleError));
    }

    getProduct(id: number): Observable<Item> {
        return this.http.get<Item>(`http://localhost:3000/products/${id}`).pipe(catchError(this.handleError));
    }

    postProduct(product: Item) {
        return this.http.post('http://localhost:3000/products', product, HTTP_OPTIONS).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError(() => error.message);
    }

    constructor(private http: HttpClient) {}
}

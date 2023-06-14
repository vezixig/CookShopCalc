import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Item } from 'src/models/Item';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    getProducts(): Observable<Item[]> {
        return this.http.get<any[]>('http://localhost:3000/products').pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError(() => error.message);
    }

    constructor(private http: HttpClient) {}
}

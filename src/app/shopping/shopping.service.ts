import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Category } from 'src/enums/Category';
import { Unit } from 'src/enums/Unit';
import { ShoppingListItem } from 'src/models/ShoppingListItem';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    getShoppingListItems(): ShoppingListItem[] {
        return [
            new ShoppingListItem(0, 'Banane', 1, Unit.Piece, Category.Fruit, 13.37, Unit.Kilogram),
            new ShoppingListItem(1, 'Wassermelone', 1, Unit.Piece, Category.Fruit, 13.37, Unit.Kilogram),
            new ShoppingListItem(2, 'Tomate', 3, Unit.Piece, Category.Vegetable, 13.37, Unit.Kilogram),
            new ShoppingListItem(3, 'Schlangengurke', 1, Unit.Piece, Category.Vegetable, 13.37, Unit.Kilogram),
        ];
    }

    getTestData(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/products').pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError(() => error.message);
    }

    constructor(private http: HttpClient) {}
}

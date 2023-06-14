import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';
import { ShoppingListItem } from 'src/models/ShoppingListItem';

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    getShoppingListItems(): ShoppingListItem[] {
        return [
            new ShoppingListItem('Banane', 1, Unit.Piece, ItemType.Fruit, 13.37, Unit.Kilogram),
            new ShoppingListItem('Wassermelone', 1, Unit.Piece, ItemType.Fruit, 13.37, Unit.Kilogram),
            new ShoppingListItem('Tomate', 3, Unit.Piece, ItemType.Vegetable, 13.37, Unit.Kilogram),
            new ShoppingListItem('Schlangengurke', 1, Unit.Piece, ItemType.Vegetable, 13.37, Unit.Kilogram),
        ];
    }

    getTestData(): Observable<any[]> {
        return this.http.get<any[]>('https://bobsburgers-api.herokuapp.com/characters/?limit=9').pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError(() => error.message);
    }

    constructor(private http: HttpClient) {}
}

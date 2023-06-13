import { Injectable } from '@angular/core';
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
}

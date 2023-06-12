import { Component } from '@angular/core';
import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';
import { ShoppingListItem } from 'src/models/ShoppingListItem';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'csc-shopping-list',
    templateUrl: 'shoppinglist.component.html',
})
export class ShoppingList {
    items: ShoppingListItem[] = [
        new ShoppingListItem('Banane', 1, Unit.Piece, ItemType.Fruit),
        new ShoppingListItem('Wassermelone', 1, Unit.Piece, ItemType.Fruit),
        new ShoppingListItem('Tomate', 3, Unit.Piece, ItemType.Vegetable),
        new ShoppingListItem(
            'Schlangengurke',
            1,
            Unit.Piece,
            ItemType.Vegetable
        ),
    ];

    categoryImageWidth = 32;
    faTrash = faTrash;
    faCheck = faCheck;
    isListCollapsed = false;
    listFilter = '';

    toggleList() {
        this.isListCollapsed = !this.isListCollapsed;
    }
}

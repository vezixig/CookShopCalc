import { Component, OnInit } from '@angular/core';
import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';
import { ShoppingListItem } from 'src/models/ShoppingListItem';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ItemTypeUtils } from '../../shared/item-type.utils';
import { ShoppingListService as ShoppingService } from '../shopping.service';

@Component({
    selector: 'csc-shopping-list',
    templateUrl: 'shoppinglist.component.html',
})
export class ShoppingList implements OnInit {
    categoryImageWidth = 32;
    faCheck = faCheck;
    faTrash = faTrash;
    isListCollapsed = false;
    itemTypeUtils = ItemTypeUtils;
    items: ShoppingListItem[] = [];
    filteredItems: ShoppingListItem[] = [];

    private _listFilter = '';

    get listFilter() {
        return this._listFilter;
    }

    set listFilter(filter: string) {
        this._listFilter = filter.toLocaleLowerCase();
        this.doFilter();
    }

    constructor(private _shoppingService: ShoppingService) {}

    ngOnInit(): void {
        this.items = this._shoppingService.getShoppingListItems();
        this.doFilter();
    }

    toggleList() {
        this.isListCollapsed = !this.isListCollapsed;
    }

    doFilter() {
        this.filteredItems = this.items.filter((item: ShoppingListItem) => item.name.toLocaleLowerCase().includes(this._listFilter));
    }
}

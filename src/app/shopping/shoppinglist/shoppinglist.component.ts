import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListItem } from 'src/models/ShoppingListItem';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { CategoryUtils } from '../../shared/item-type.utils';
import { ShoppingListService as ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'csc-shopping-list',
    templateUrl: 'shoppinglist.component.html',
})
export class ShoppingList implements OnInit, OnDestroy {
    categoryImageWidth = 32;
    faCheck = faCheck;
    faTrash = faTrash;
    isListCollapsed = false;
    categoryUtils = CategoryUtils;
    items: ShoppingListItem[] = [];
    filteredItems: ShoppingListItem[] = [];
    testData: any[] = [];

    private _listFilter = '';
    private _getTestDataSubscription?: Subscription;

    get listFilter() {
        return this._listFilter;
    }

    set listFilter(filter: string) {
        this._listFilter = filter.toLocaleLowerCase();
        this.doFilter();
    }

    constructor(private _shoppingService: ShoppingService) {}

    ngOnDestroy(): void {
        this._getTestDataSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        this.items = this._shoppingService.getShoppingListItems();

        this._getTestDataSubscription = this._shoppingService.getTestData().subscribe({
            next: (testData) => {
                console.log(testData);
            },
            error: (errorMessage) => console.log(errorMessage),
        });

        this.doFilter();
    }

    toggleList() {
        this.isListCollapsed = !this.isListCollapsed;
    }

    doFilter() {
        this.filteredItems = this.items.filter((item: ShoppingListItem) => item.name.toLocaleLowerCase().includes(this._listFilter));
    }
}

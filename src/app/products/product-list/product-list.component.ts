import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { UnitUtils } from 'src/app/shared/unit.utils';
import { Item } from 'src/models/Item';
import { ProductsService } from '../products.service';

@Component({
    selector: 'csc-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
    productList!: Observable<Item[]>;

    faPencil = faPencil;
    faTrash = faTrash;
    unitUtils = UnitUtils;
    listFilter = '';
    products: Item[] = [];

    constructor(private _productService: ProductsService) {}
    ngOnDestroy(): void {}
    ngOnInit(): void {
        this.productList = this._productService.getProducts();
    }
}

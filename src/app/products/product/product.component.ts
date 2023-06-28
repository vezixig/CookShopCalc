import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryUtils } from 'src/app/shared/item-type.utils';
import { UnitUtils } from 'src/app/shared/unit.utils';
import { Category } from 'src/enums/Category';
import { Unit } from 'src/enums/Unit';
import { Item } from 'src/models/Item';
import { ProductsService } from '../products.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsModule } from '../products.module';

@Component({
    selector: 'csc-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
    productId?: number;
    isAddingProduct = false;
    originalproduct: Item = { id: 0, name: '', category: Category.Fruit, itemUnit: Unit.Piece, price: 0, priceUnit: Unit.Piece };
    categoryValues = Object.values(Category)
        .filter((value) => typeof value === 'number')
        .map((o) => Number(o));
    unitValues = Object.values(Unit)
        .filter((value) => typeof value === 'number')
        .map((o) => Number(o));
    categoryUtils = CategoryUtils;
    unitUtils = UnitUtils;

    product: Item = { id: 0, name: '', category: Category.Fruit, itemUnit: Unit.Piece, price: 0, priceUnit: Unit.Piece };

    private _postProductSubscription?: Subscription;
    private _getProductSubscription?: Subscription;

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) {}

    ngOnDestroy(): void {
        this._postProductSubscription?.unsubscribe();
        this._getProductSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        console.log(this.categoryValues);

        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.productId === 0) {
            this.isAddingProduct = true;
            this.product = { ...this.originalproduct };
        } else {
            this._getProductSubscription = this.productService.getProduct(this.productId).subscribe({
                next: (product) => {
                    this.originalproduct = product;
                    this.product = { ...this.originalproduct };
                },
            });
        }
    }

    handleSubmit(form: NgForm) {
        console.log('submit');
        if (form.valid) {
            this.product.priceUnit = Number(this.product.priceUnit);
            this.product.category = Number(this.product.category);
            this._postProductSubscription = this.productService.postProduct(this.product).subscribe({ next: (result) => this.router.navigate(['/products']) });
        }
    }
}

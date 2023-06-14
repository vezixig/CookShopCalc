import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemTypeUtils } from 'src/app/shared/item-type.utils';
import { UnitUtils } from 'src/app/shared/unit.utils';
import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';
import { Item } from 'src/models/Item';

@Component({
    selector: 'csc-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    productId?: number;
    isAddingProduct = false;
    product: Item = { id: 0, name: '', itemType: ItemType.Fruit, itemUnit: Unit.Piece, price: 0, priceUnit: Unit.Piece };
    itemTypeValues = Object.values(ItemType)
        .filter((value) => typeof value === 'number')
        .map((o) => Number(o));
    unitValues = Object.values(Unit)
        .filter((value) => typeof value === 'number')
        .map((o) => Number(o));
    itemTypeUtils = ItemTypeUtils;
    unitUtils = UnitUtils;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(this.itemTypeValues);

        this.productId = Number(this.route.snapshot.paramMap.get('id'));
        if (this.productId === 0) {
            this.isAddingProduct = true;
        } else {
            // load product
        }
    }
}

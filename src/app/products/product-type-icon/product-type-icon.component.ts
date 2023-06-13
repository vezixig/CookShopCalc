import { Component, Input, OnChanges } from '@angular/core';
import { IconDefinition, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { ItemTypeUtils } from 'src/app/shared/item-type.utils';
import { ItemType } from 'src/enums/ItemType';

@Component({
    selector: 'csc-product-type-icon',
    templateUrl: './product-type-icon.component.html',
    styleUrls: ['./product-type-icon.component.css'],
})
export class ProductTypeIconComponent implements OnChanges {
    @Input() itemType: ItemType = ItemType.Fruit;

    borderColor = 'grey';
    categoryName = '';
    typeIcon: IconDefinition = faQuestionCircle;

    ngOnChanges() {
        this.borderColor = ItemTypeUtils.ToColor(this.itemType);
        this.categoryName = ItemTypeUtils.ToDescription(this.itemType);
        this.typeIcon = ItemTypeUtils.ToIcon(this.itemType);
    }
}

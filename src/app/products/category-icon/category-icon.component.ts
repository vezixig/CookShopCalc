import { Component, Input, OnChanges } from '@angular/core';
import { IconDefinition, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryUtils } from 'src/app/shared/item-type.utils';
import { Category } from 'src/enums/Category';

@Component({
    selector: 'csc-category-icon',
    templateUrl: './category-icon.component.html',
    styleUrls: ['./category-icon.component.css'],
})
export class CategoryItemComponent implements OnChanges {
    @Input() category: Category = Category.Fruit;

    borderColor = 'grey';
    categoryName = '';
    typeIcon: IconDefinition = faQuestionCircle;

    ngOnChanges() {
        this.borderColor = CategoryUtils.ToColor(this.category);
        this.categoryName = CategoryUtils.ToDescription(this.category);
        this.typeIcon = CategoryUtils.ToIcon(this.category);
    }
}

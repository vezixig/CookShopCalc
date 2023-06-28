import { IconDefinition, faAppleWhole, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';
import { Category } from 'src/enums/Category';

export class CategoryUtils {
    static ToColor(category: Category): string {
        switch (category) {
            case Category.Fruit:
                return 'FireBrick';
            case Category.Vegetable:
                return 'ForestGreen';
            default:
                throw new Error('Argument category is out of range.');
        }
    }

    static ToDescription(category: Category): string {
        switch (category) {
            case Category.Fruit:
                return 'Obst';
            case Category.Vegetable:
                return 'Gemüse';
            default:
                throw new Error('Argument category is out of range.');
        }
    }

    static ToIcon(category: Category): IconDefinition {
        switch (category) {
            case Category.Fruit:
                return faAppleWhole;
            case Category.Vegetable:
                return faCarrot;
            default:
                throw new Error('Argument category is out of range.');
        }
    }

    static ToString(category: Category): string {
        return Category[category];
    }
}

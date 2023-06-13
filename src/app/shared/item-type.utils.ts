import { IconDefinition, faAppleWhole, faCarrot } from '@fortawesome/free-solid-svg-icons';
import { ItemType } from 'src/enums/ItemType';

export class ItemTypeUtils {
    static ToColor(itemType: ItemType): string {
        switch (itemType) {
            case ItemType.Fruit:
                return 'FireBrick';
            case ItemType.Vegetable:
                return 'ForestGreen';
            default:
                throw 'Argument out of range.';
        }
    }

    static ToDescription(itemType: ItemType): string {
        switch (itemType) {
            case ItemType.Fruit:
                return 'Obst';
            case ItemType.Vegetable:
                return 'Gemüse';
            default:
                throw 'Argument out of range.';
        }
    }

    static ToIcon(itemType: ItemType): IconDefinition {
        switch (itemType) {
            case ItemType.Fruit:
                return faAppleWhole;
            case ItemType.Vegetable:
                return faCarrot;
            default:
                throw 'Argument out of range.';
        }
    }

    static ToString(itemType: ItemType): string {
        return ItemType[itemType];
    }
}

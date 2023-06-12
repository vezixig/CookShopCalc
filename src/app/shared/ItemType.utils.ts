import { ItemType } from 'src/enums/ItemType';

export class ItemTypeUtils {
    static ItemTypeToColor(itemType: ItemType): string {
        switch (itemType) {
            case ItemType.Fruit:
                return 'red';
            case ItemType.Vegetable:
                return 'green';
        }
    }

    static ItemTypeToDescription(itemType: ItemType): string {
        switch (itemType) {
            case ItemType.Fruit:
                return 'Obst';
            case ItemType.Vegetable:
                return 'Gemüse';
        }
    }

    static ItemTypeToString(itemType: ItemType): string {
        return ItemType[itemType];
    }
}

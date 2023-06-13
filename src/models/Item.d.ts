import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';

declare type Item = {
    name: string;
    itemUnit: Unit;
    itemType: ItemType;
    price: number;
    priceUnit: Unit;
};

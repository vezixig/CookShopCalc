import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';

declare type Item = {
    id: number;
    name: string;
    itemUnit: Unit;
    itemType: ItemType;
    price: number;
    priceUnit: Unit;
};

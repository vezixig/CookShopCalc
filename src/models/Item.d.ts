import { Category } from 'src/enums/Category';
import { Unit } from 'src/enums/Unit';

declare type Item = {
    id: number;
    name: string;
    itemUnit: Unit;
    category: Category;
    price: number;
    priceUnit: Unit;
};

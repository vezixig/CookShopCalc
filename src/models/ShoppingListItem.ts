import { Category } from 'src/enums/Category';
import { Unit } from 'src/enums/Unit';
import { Item } from './Item';

export class ShoppingListItem implements Item {
    private _amount = 0;
    private _price = 0;

    public name: string;
    public itemUnit: Unit;
    public category: Category;
    public priceUnit: Unit;
    private _id: number;

    public constructor(id: number, name: string, amount: number, itemUnit: Unit, category: Category, price: number, priceUnit: Unit) {
        this._id = id;
        this.amount = amount;
        this.name = name;
        this.itemUnit = itemUnit;
        this.category = category;
        this.price = price;
        this.priceUnit = priceUnit;
    }

    public get id() {
        return this._id;
    }

    public get amount() {
        return this._amount;
    }

    public set amount(amount: number) {
        if (amount < 0) {
            amount = 0;
        }
        this._amount = amount;
    }

    public get price() {
        return this._price;
    }

    public set price(price: number) {
        if (price < 0) {
            price = 0;
        }
        this._price = price;
    }
}

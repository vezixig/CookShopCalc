import { ItemType } from 'src/enums/ItemType';
import { Unit } from 'src/enums/Unit';
import { Item } from './Item';

export class ShoppingListItem implements Item {
    private _amount: number = 0;

    public Name: string;
    public Unit: Unit;
    public ItemType: ItemType;

    public constructor(
        name: string,
        amount: number,
        unit: Unit,
        itemType: ItemType
    ) {
        this.Amount = amount;
        this.Name = name;
        this.Unit = unit;
        this.ItemType = itemType;
    }

    public get Amount() {
        return this._amount;
    }

    public set Amount(amount: number) {
        if (amount < 0) {
            amount = 0;
        }
        this._amount = amount;
    }
}

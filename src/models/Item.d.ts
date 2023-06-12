import { ItemType } from "src/enums/ItemType";
import { Unit } from "src/enums/Unit";

declare type Item = {
    Name: string;
    Unit: Unit;
    ItemType: ItemType;
};

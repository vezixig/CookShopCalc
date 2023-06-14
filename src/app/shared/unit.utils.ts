import { Unit } from 'src/enums/Unit';

/**
 Utility class for the enum Unit.
 @see {@link Unit}
*/
export class UnitUtils {
    /**
     * Converts a unit to its abbreviation.
     * @param unit The unit to convert.
     * @returns The abbreviation of the unit.
     * @throws {string} If the unit is not recognized.
     */
    static ToAbbrevation(unit: Unit): string {
        switch (unit) {
            case Unit.Piece:
                return 'Stk.';
            case Unit.Grams:
                return 'g';
            case Unit.Kilogram:
                return 'kg';
            case Unit.Milligram:
                return 'mg';
            default:
                throw 'Argument out of range.';
        }
    }

    /**
     * Converts a unit to its string representation.
     * @param unit The unit to convert.
     * @returns The string representation of the unit.
     */
    static ToString(unit: Unit): string {
        return Unit[unit];
    }
}

import Consumables, { ConsumablesKeys } from '~/types/Consumables';

const parseStringToConsumables = (consumables: string): Consumables => {
    const splittedString = consumables.split(' ');
    const consumable = { days: 0, weeks: 0, months: 0, years: 0 } as Consumables;

    Object.keys(consumable).map((period) => {
        if (period.startsWith(splittedString[1])) {
            consumable[`${period as ConsumablesKeys}`] = Number(splittedString[0]);
        }
    });

    return consumable;
};

export default parseStringToConsumables;

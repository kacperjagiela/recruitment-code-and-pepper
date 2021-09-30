import { ConsumablesKeys } from 'types/Consumables';

import { Consumables } from '~/types';

const parseStringToConsumables = (consumables: string): Consumables => {
    const splittedString = consumables.split(' ');
    const consumable = { days: 0, weeks: 0, months: 0, years: 0, fullString: consumables } as Consumables;

    Object.keys(consumable).map((period) => {
        if (period.startsWith(splittedString[1])) {
            consumable[`${period as ConsumablesKeys}`] = Number(splittedString[0]);
        }
    });

    return consumable;
};

export default parseStringToConsumables;

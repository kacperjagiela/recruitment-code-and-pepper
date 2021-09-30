import { ConsumablesKeys } from 'types/Consumables';

import { StarShip } from '~/types';

const compareStarShipsByConsumables = (firstStarShip: StarShip, secondStarShip: StarShip): StarShip | null => {
    const firstConsumables = firstStarShip.consumables;
    const secondConsumables = secondStarShip.consumables;

    const keys = Object.keys(firstConsumables).reverse();

    keys.forEach((key) => {
        if (firstConsumables[key as ConsumablesKeys] > secondConsumables[key as ConsumablesKeys]) {
            return firstStarShip;
        } else if (firstConsumables[key as ConsumablesKeys] < secondConsumables[key as ConsumablesKeys]) {
            return secondStarShip;
        }
    });
    return null;
};

export default compareStarShipsByConsumables;

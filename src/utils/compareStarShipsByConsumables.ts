import { ConsumablesKeys } from 'types/Consumables';

import { StarShip } from '~/types';

const compareStarShipsByConsumables = (firstStarShip: StarShip, secondStarShip: StarShip): StarShip | null => {
    const firstConsumables = firstStarShip.consumables;
    const secondConsumables = secondStarShip.consumables;

    const keys = Object.keys(firstConsumables).reverse();

    let finalStarShip = {} as StarShip;

    keys.forEach((key) => {
        if (key !== 'fullString' && !finalStarShip.name) {
            if (firstConsumables[key as ConsumablesKeys] > secondConsumables[key as ConsumablesKeys]) {
                finalStarShip = firstStarShip;
            } else if (firstConsumables[key as ConsumablesKeys] < secondConsumables[key as ConsumablesKeys]) {
                finalStarShip = secondStarShip;
            }
        }
    });

    return finalStarShip;
};

export default compareStarShipsByConsumables;

import StarShip from '~/types/StarShip';
import StarShipResponse from '~/types/StarShipResponse';

import parseStringToConsumables from './parseStringToConsumables';
import parseStringToNumberOrNumberRange from './parseStringToNumber';

const parseStarShipResponseToStarShip = (response: StarShipResponse): StarShip[] => {
    const responseStarShips = response.results;

    const starShips = responseStarShips.map((responseStarShip) => {
        return {
            ...responseStarShip,
            cost_in_credits: parseStringToNumberOrNumberRange(responseStarShip.cost_in_credits) as number,
            length: parseStringToNumberOrNumberRange(responseStarShip.length) as number,
            max_atmosphering_speed: parseStringToNumberOrNumberRange(responseStarShip.max_atmosphering_speed) as number,
            crew: parseStringToNumberOrNumberRange(responseStarShip.crew),
            passengers: parseStringToNumberOrNumberRange(responseStarShip.passengers) as number,
            cargo_capacity: parseStringToNumberOrNumberRange(responseStarShip.cargo_capacity) as number,
            consumables: parseStringToConsumables(responseStarShip.consumables),
            hyperdrive_rating: parseStringToNumberOrNumberRange(responseStarShip.hyperdrive_rating) as number,
            MGLT: parseStringToNumberOrNumberRange(responseStarShip.MGLT) as number,
        };
    });

    return starShips;
};

export default parseStarShipResponseToStarShip;

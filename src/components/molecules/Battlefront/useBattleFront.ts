import { PersonKeys } from 'types/Person';
import { StarShipKeys } from 'types/StarShip';

import { Person, StarShip } from '~/types';
import { compareStarShipsByConsumables } from '~/utils';

interface UseBattleFront {
    comparePeopleByAttribute: (firstFighter: Person, secondPerson: Person, attribute: string) => Person | null;
    compareStarShipsByAttribute: (
        firstStarShip: StarShip,
        secondStarShip: StarShip,
        attribute: string,
    ) => StarShip | null;
}

const useBattleFront = (): UseBattleFront => {
    const comparePeopleByAttribute = (firstPerson: Person, secondPerson: Person, attribute: string): Person | null => {
        if (firstPerson[attribute as PersonKeys] > secondPerson[attribute as PersonKeys]) {
            return firstPerson;
        } else if (firstPerson[attribute as PersonKeys] === secondPerson[attribute as PersonKeys]) {
            return null;
        }
        return secondPerson;
    };

    const compareStarShipsByAttribute = (
        firstStarShip: StarShip,
        secondStarShip: StarShip,
        attribute: string,
    ): StarShip | null => {
        if (attribute === 'consumables') {
            return compareStarShipsByConsumables(firstStarShip, secondStarShip);
        }

        if (firstStarShip[attribute as StarShipKeys] > secondStarShip[attribute as StarShipKeys]) {
            return firstStarShip;
        } else if (firstStarShip[attribute as StarShipKeys] < secondStarShip[attribute as StarShipKeys]) {
            return secondStarShip;
        }
        return null;
    };

    return {
        comparePeopleByAttribute,
        compareStarShipsByAttribute,
    };
};

export default useBattleFront;

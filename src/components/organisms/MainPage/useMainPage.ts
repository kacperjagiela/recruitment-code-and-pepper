import { useEffect, useState } from 'react';

import { Person, StarShip } from '~/types';
import { getRandomPersonOrStarShipFromArray } from '~/utils';

interface UseMainPage {
    peopleAttributes: string[];
    starShipsAttributes: string[];
    currentBattleType: string;
    onBattleTypeChange: (type: string) => void;
    currentAttribute: string;
    onAttributeChange: (attribute: string) => void;
    onFightClick: () => void;
    currentFighters: Person[] | StarShip[];
}

const useMainPage = (people: Person[], starShips: StarShip[]): UseMainPage => {
    const [currentBattleType, setCurrentBattleType] = useState('');
    const [currentAttribute, setCurrentAttribute] = useState('');
    const [currentFighters, setCurrentFighters] = useState([] as Person[] | StarShip[]);

    const peopleAttributes = ['height', 'mass'];
    const starShipsAttributes = [
        'cost_in_credits',
        'length',
        'max_atmosphering_speed',
        'crew',
        'passengers',
        'cargo_capacity',
        'consumables',
        'hyperdrive_rating',
        'MGLT',
    ];

    useEffect(() => {
        setCurrentAttribute('');
        setCurrentFighters([]);
    }, [currentBattleType]);

    const onAttributeChange = (attribute: string) => {
        setCurrentAttribute(attribute);
    };

    const onBattleTypeChange = (type: string) => {
        setCurrentBattleType(type);
    };

    const onFightClick = () => {
        if (currentAttribute) {
            if (currentBattleType === 'person') {
                setCurrentFighters([
                    getRandomPersonOrStarShipFromArray(people),
                    getRandomPersonOrStarShipFromArray(people),
                ] as Person[]);
            } else {
                setCurrentFighters([
                    getRandomPersonOrStarShipFromArray(starShips),
                    getRandomPersonOrStarShipFromArray(starShips),
                ] as StarShip[]);
            }
        }
    };

    return {
        peopleAttributes,
        starShipsAttributes,
        currentBattleType,
        onBattleTypeChange,
        currentAttribute,
        onAttributeChange,
        onFightClick,
        currentFighters,
    };
};

export default useMainPage;

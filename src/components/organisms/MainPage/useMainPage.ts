import { useState } from 'react';

interface UseMainPage {
    peopleAttributes: string[];
    starShipsAttributes: string[];
    currentBattleType: string;
    onBattleTypeChange: (type: string) => void;
    currentAttribute: string;
    onAttributeChange: (attribute: string) => void;
    onFightClick: () => void;
}

const useMainPage = (): UseMainPage => {
    const [currentBattleType, setCurrentBattleType] = useState('');
    const [currentAttribute, setCurrentAttribute] = useState('');

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

    const onAttributeChange = (attribute: string) => {
        console.log(attribute);
        setCurrentAttribute(attribute);
    };

    const onBattleTypeChange = (type: string) => {
        setCurrentBattleType(type);
    };

    const onFightClick = () => {
        console.log('fight');
    };

    return {
        peopleAttributes,
        starShipsAttributes,
        currentBattleType,
        onBattleTypeChange,
        currentAttribute,
        onAttributeChange,
        onFightClick,
    };
};

export default useMainPage;

import { Person, PersonResponse } from '~/types';

import parseStringToNumberOrNumberRange from './parseStringToNumberOrNumberRange';

const parsePersonResponseToPerson = (response: PersonResponse): Person[] => {
    const responsePeople = response.results;

    const people = responsePeople.map((responsePerson) => {
        return {
            ...responsePerson,
            height: parseStringToNumberOrNumberRange(responsePerson.height) as number,
            mass: parseStringToNumberOrNumberRange(responsePerson.mass) as number,
        };
    });

    return people;
};

export default parsePersonResponseToPerson;

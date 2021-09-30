import Person from '~/types/Person';
import PersonResponse from '~/types/PersonResponse';

import parseStringToNumberOrNumberRange from './parseStringToNumber';

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

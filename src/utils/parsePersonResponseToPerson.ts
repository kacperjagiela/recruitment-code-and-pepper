import { Person, PersonResponse } from '~/types';

import parseStringToNumberOrNumberRange from './parseStringToNumberOrNumberRange';

const parsePersonResponseToPerson = (response: PersonResponse): Person[] => {
    const responsePeople = response.results;

    const people = responsePeople.map((responsePerson) => ({
        name: responsePerson.name,
        hair_color: responsePerson.hair_color,
        skin_color: responsePerson.skin_color,
        eye_color: responsePerson.eye_color,
        birth_year: responsePerson.birth_year,
        gender: responsePerson.gender,
        height: parseStringToNumberOrNumberRange(responsePerson.height) as number,
        mass: parseStringToNumberOrNumberRange(responsePerson.mass) as number,
    }));

    return people;
};

export default parsePersonResponseToPerson;

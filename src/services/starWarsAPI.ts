import { Person, PersonResponse, StarShip } from '~/types';
import { parsePersonResponseToPerson, parseStarShipResponseToStarShip } from '~/utils';

export const fetchPeople = async (): Promise<Person[]> => {
    try {
        const response = await fetch('https://swapi.dev/api/people');

        if (response.status === 200) {
            const responseBody = (await response.json()) as PersonResponse;

            const people = parsePersonResponseToPerson(responseBody);

            return people;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

export const fetchStarShips = async (): Promise<StarShip[]> => {
    try {
        const response = await fetch('https://swapi.dev/api/starships');

        if (response.status === 200) {
            const responseBody = await response.json();

            const starShips = parseStarShipResponseToStarShip(responseBody);

            return starShips;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

import { Person, StarShip } from '~/types';

const getRandomPersonOrStarShipFromArray = (array: Person[] | StarShip[]): Person | StarShip =>
    array[Math.floor(Math.random() * array.length)];

export default getRandomPersonOrStarShipFromArray;

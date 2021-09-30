import Consumables from './Consumables';
import NumberRange from './NumberRange';

type StarShip = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number | NumberRange | null;
    passengers: number;
    cargo_capacity: number;
    consumables: Consumables;
    hyperdrive_rating: number;
    MGLT: number;
};

export default StarShip;

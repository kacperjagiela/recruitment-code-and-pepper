import Consumables from './Consumables';

type StarShip = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: number;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: Consumables;
    hyperdrive_rating: number;
    MGLT: number;
};

export type StarShipKeys =
    | 'name'
    | 'model'
    | 'manufacturer'
    | 'cost_in_credits'
    | 'length'
    | 'max_atmosphering_speed'
    | 'crew'
    | 'passengers'
    | 'cargo_capacity'
    | 'hyperdrive_rating'
    | 'MGLT';

export default StarShip;

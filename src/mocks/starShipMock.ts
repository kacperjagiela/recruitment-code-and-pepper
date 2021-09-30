import { StarShip } from '~/types';

const starShipMock = {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: 3500000,
    length: 150,
    max_atmosphering_speed: 950,
    crew: 30,
    passengers: 600,
    cargo_capacity: 3000000,
    consumables: { days: 0, months: 0, years: 1, fullString: '1 year' },
    hyperdrive_rating: 2.0,
    MGLT: 60,
} as StarShip;

export default starShipMock;

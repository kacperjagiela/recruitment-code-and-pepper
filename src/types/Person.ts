type Person = {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
};

export type PersonKeys =
    | 'name'
    | 'height'
    | 'mass'
    | 'hair_color'
    | 'skin_color'
    | 'eye_color'
    | 'birth_year'
    | 'gender';

export default Person;

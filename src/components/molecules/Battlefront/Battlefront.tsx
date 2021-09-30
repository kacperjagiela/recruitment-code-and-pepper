import { Person, StarShip } from '~/types';

interface Props {
    firstDuelist: Person | StarShip;
    secondDuelist: Person | StarShip;
}

const Battlefront: React.FC<Props> = ({ firstDuelist, secondDuelist }: Props) => (
    <div>
        {firstDuelist.name} vs {secondDuelist.name}
    </div>
);

export default Battlefront;

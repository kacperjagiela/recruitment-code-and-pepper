import { FighterCard } from '~/components/atoms';
import { Person, StarShip } from '~/types';

interface Props {
    firstDuelist: Person | StarShip;
    secondDuelist: Person | StarShip;
    currentBattleType: string;
}

const Battlefront: React.FC<Props> = ({ firstDuelist, secondDuelist, currentBattleType }: Props) => {
    return (
        <div>
            {currentBattleType === 'person' ? (
                <>
                    <FighterCard person={firstDuelist as Person} shouldWin={false} />
                    vs
                    <FighterCard person={secondDuelist as Person} shouldWin={false} />
                </>
            ) : (
                <>
                    <FighterCard starShip={firstDuelist as StarShip} shouldWin={false} />
                    vs
                    <FighterCard starShip={secondDuelist as StarShip} shouldWin={false} />
                </>
            )}
        </div>
    );
};

export default Battlefront;

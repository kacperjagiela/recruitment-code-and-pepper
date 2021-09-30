import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { FighterCard } from '~/components/atoms';
import { Person, StarShip } from '~/types';

import useBattleFront from './useBattleFront';

interface Props {
    firstDuelist: Person | StarShip;
    secondDuelist: Person | StarShip;
    currentBattleType: string;
    currentAttribute: string;
}

const Battlefront: React.FC<Props> = ({ firstDuelist, secondDuelist, currentBattleType, currentAttribute }: Props) => {
    const { compareStarShipsByAttribute, comparePeopleByAttribute } = useBattleFront();

    let winner;

    if (currentBattleType === 'person') {
        winner = comparePeopleByAttribute(firstDuelist as Person, secondDuelist as Person, currentAttribute);
    } else {
        winner = compareStarShipsByAttribute(firstDuelist as StarShip, secondDuelist as StarShip, currentAttribute);
    }

    return (
        <Box
            sx={{
                textAlign: 'center',
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}
        >
            {currentBattleType === 'person' ? (
                <>
                    <FighterCard
                        fighter={firstDuelist}
                        shouldWin={winner ? winner.name === firstDuelist.name : false}
                        currentAttribute={currentAttribute}
                    />
                    <Typography sx={{ py: 4 }} variant="h5">
                        VS
                    </Typography>
                    <FighterCard
                        fighter={secondDuelist}
                        shouldWin={winner ? winner.name === secondDuelist.name : false}
                        currentAttribute={currentAttribute}
                    />
                </>
            ) : (
                <>
                    <FighterCard
                        fighter={firstDuelist}
                        shouldWin={winner ? winner.name === firstDuelist.name : false}
                        currentAttribute={currentAttribute}
                    />
                    <Typography sx={{ py: 4 }} variant="h5">
                        VS
                    </Typography>
                    <FighterCard
                        fighter={secondDuelist}
                        shouldWin={winner ? winner.name === secondDuelist.name : false}
                        currentAttribute={currentAttribute}
                    />
                </>
            )}
        </Box>
    );
};

export default Battlefront;

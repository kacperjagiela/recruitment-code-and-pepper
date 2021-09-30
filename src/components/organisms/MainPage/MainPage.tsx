import { Box } from '@mui/system';

import { Hero } from '~/components/molecules';
import { Person, StarShip } from '~/types';

import useMainPage from './useMainPage';

interface Props {
    people: Person[];
    starShips: StarShip[];
}

const MainPage: React.FC<Props> = ({ people, starShips }: Props) => {
    const {
        currentBattleType,
        onBattleTypeChange,
        currentAttribute,
        onAttributeChange,
        peopleAttributes,
        starShipsAttributes,
        onFightClick,
    } = useMainPage();

    return (
        <Box
            sx={{
                px: '15%',
                minWidth: '100vw',
                minHeight: '100vh',
                overflowX: 'hidden',
                bgcolor: 'background.paper',
            }}
        >
            <Hero
                onFightClick={onFightClick}
                peopleAttributes={peopleAttributes}
                starShipsAttributes={starShipsAttributes}
                currentBattleType={currentBattleType}
                onBattleTypeChange={onBattleTypeChange}
                onAttributeChange={onAttributeChange}
            />
        </Box>
    );
};

export default MainPage;

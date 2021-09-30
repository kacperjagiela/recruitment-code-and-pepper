import { Box } from '@mui/system';

import { Battlefront, Footer, Hero } from '~/components/molecules';
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
        currentFighters,
    } = useMainPage(people, starShips);

    return (
        <Box
            sx={{
                px: '15%',
                minWidth: '100vw',
                minHeight: '100vh',
                overflowX: 'hidden',
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Hero
                onFightClick={onFightClick}
                peopleAttributes={peopleAttributes}
                starShipsAttributes={starShipsAttributes}
                currentBattleType={currentBattleType}
                currentAttribute={currentAttribute}
                onBattleTypeChange={onBattleTypeChange}
                onAttributeChange={onAttributeChange}
            />
            {currentFighters.length > 0 && (
                <Battlefront
                    currentBattleType={currentBattleType}
                    firstDuelist={currentFighters[0]}
                    secondDuelist={currentFighters[1]}
                />
            )}
            <Footer />
        </Box>
    );
};

export default MainPage;

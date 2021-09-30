import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { TypeSelect } from '~/components/atoms';

interface Props {
    peopleAttributes: string[];
    starShipsAttributes: string[];
    onBattleTypeChange: (type: string) => void;
    onAttributeChange: (attribute: string) => void;
    onFightClick: () => void;
    currentBattleType: string;
    currentAttribute: string;
}

const Hero: React.FC<Props> = ({
    peopleAttributes,
    starShipsAttributes,
    currentBattleType,
    onBattleTypeChange,
    onAttributeChange,
    onFightClick,
    currentAttribute,
}: Props) => (
    <Box>
        <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
            Battle it out! <br />
            (Star Wars edition)
        </Typography>
        <TypeSelect options={['people', 'starships']} label="Battle type" onChange={onBattleTypeChange} />
        {currentBattleType === 'people' && (
            <TypeSelect options={peopleAttributes} label="Choose attribute" onChange={onAttributeChange} />
        )}
        {currentBattleType === 'starships' && (
            <TypeSelect options={starShipsAttributes} label="Choose attribute" onChange={onAttributeChange} />
        )}

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
            <Button
                disabled={currentAttribute.length === 0}
                variant="contained"
                sx={{ textAlign: 'right' }}
                onClick={onFightClick}
            >
                Random fight!
            </Button>
        </Box>
    </Box>
);

export default Hero;

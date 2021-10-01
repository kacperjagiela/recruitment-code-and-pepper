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
        <Typography variant="h3" component="h3" sx={{ textAlign: 'center', my: 2 }}>
            Battle it out! <br />
            (Star Wars edition)
        </Typography>
        <TypeSelect options={['person', 'starships']} label="Battle type" onChange={onBattleTypeChange} />
        {currentBattleType === 'person' && (
            <TypeSelect options={peopleAttributes} label="Choose person attribute" onChange={onAttributeChange} />
        )}
        {currentBattleType === 'starships' && (
            <TypeSelect options={starShipsAttributes} label="Choose starship attribute" onChange={onAttributeChange} />
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

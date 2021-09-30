import { Card, CardContent, Typography } from '@mui/material';

import { Person, StarShip } from '~/types';

interface Props {
    person?: Person;
    starShip?: StarShip;
    shouldWin: boolean;
}

const FighterCard: React.FC<Props> = ({ person, starShip, shouldWin }: Props) => (
    <Card>
        <CardContent>
            <Typography gutterBottom>{person?.name || starShip?.name}</Typography>
        </CardContent>
    </Card>
);

export default FighterCard;

import { Card, CardContent, Typography } from '@mui/material';
import { PersonKeys } from 'types/Person';
import { StarShipKeys } from 'types/StarShip';

import { Person, StarShip } from '~/types';

interface Props {
    fighter: Person | StarShip;
    shouldWin: boolean;
    currentAttribute: string;
}

const FighterCard: React.FC<Props> = ({ fighter, shouldWin, currentAttribute }: Props) => (
    <Card sx={{ border: 2, borderColor: shouldWin ? 'success.main' : 'error.main' }}>
        <CardContent>
            {Object.keys(fighter).map((key) => {
                if (key !== 'consumables') {
                    return (
                        <>
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    textDecoration: currentAttribute === key ? 'underline' : 'none',
                                }}
                                key={`${key}_${fighter.name}`}
                            >
                                <Typography sx={{ textTransform: 'capitalize' }} component="span">
                                    {`${key.replace(/_/g, ' ')}:`}
                                </Typography>{' '}
                                <b>{`${fighter[key as PersonKeys & StarShipKeys]}`}</b>
                            </Typography>
                        </>
                    );
                } else {
                    return (
                        <>
                            <Typography
                                sx={{
                                    textAlign: 'left',
                                    textDecoration: currentAttribute === key ? 'underline' : 'none',
                                }}
                                key={`${key}_${fighter.name}`}
                            >
                                <Typography sx={{ textTransform: 'capitalize' }} component="span">
                                    {`${key.replace(/_/g, ' ')}:`}
                                </Typography>{' '}
                                <b>{(fighter as StarShip).consumables.fullString}</b>
                            </Typography>
                        </>
                    );
                }
            })}
        </CardContent>
    </Card>
);

export default FighterCard;

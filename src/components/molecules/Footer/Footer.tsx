import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Footer: React.FC = () => (
    <Box sx={{ justifySelf: 'flex-end', py: 2 }}>
        <Typography sx={{ textAlign: 'center' }}>
            Developed by{' '}
            <Link color="inherit" href="https://github.com/kacperjagiela">
                Kacper Jagieła
            </Link>{' '}
            for{' '}
            <Link color="inherit" href="https://codeandpepper.com/">
                Code & Pepper
            </Link>
        </Typography>
    </Box>
);

export default Footer;

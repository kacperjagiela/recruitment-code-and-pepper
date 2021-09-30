import { ReactElement } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import type { AppProps } from 'next/app';

import '../../styles/globals.css';

const theme = createTheme({ palette: { background: { paper: '#DCEDFF' } } });

const App = ({ Component, pageProps }: AppProps): ReactElement<any, any> => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;

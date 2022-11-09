import {createTheme} from '@mui/material/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const light = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            grey: '#fafafa'
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none'
        }
    }
});

export default light

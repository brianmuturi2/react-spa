import {createTheme} from '@mui/material/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

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
        button: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        }
    }
});

export default light

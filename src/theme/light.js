import {createTheme} from '@mui/material/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const light = createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
});

export default light

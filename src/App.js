import {Toolbar} from '@mui/material';
import Header from './components/ui/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import light from './theme/light';

function App() {
  return (
      <ThemeProvider theme={light}>
          <Header/>
          <Toolbar sx={{marginBottom: '1em'}}/>
          <div className="App">
              Hello!
          </div>
      </ThemeProvider>
  );
}

export default App;

import {Toolbar} from '@mui/material';
import Header from './components/ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import light from './theme/light';

function App() {
  return (
      <ThemeProvider theme={light}>
          <Header/>
          <Toolbar/>
          <div className="App">
              Hello!
          </div>
      </ThemeProvider>
  );
}

export default App;

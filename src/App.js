import {Toolbar} from '@mui/material';
import Header from './components/ui/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import light from './theme/light';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";

import Services from './pages/services/Services';
import CustomSoftware from './pages/custom-software/CustomSoftware';
import MobileApps from './pages/mobile-apps/MobileApps';
import Websites from './pages/websites/Websites';
import Revolution from './pages/revolution/Revolution';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Estimate from './pages/estimate/Estimate';
import Home from './pages/home/Home';
import Footer from './components/ui/Footer/Footer';

function App() {
  return (
      <ThemeProvider theme={light}>
          <BrowserRouter>
              <StyledEngineProvider injectFirst>
              <Header/>
              <Toolbar sx={{marginBottom: '1em'}}/>
              <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/services'} element={<Services/>}/>
                  <Route exact path={'/custom-software'} element={<CustomSoftware/>}/>
                  <Route exact path={'/mobile-apps'} element={<MobileApps/>}/>
                  <Route exact path={'/websites'} element={<Websites/>}/>
                  <Route exact path={'/revolution'} element={<Revolution/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/contact'} element={<Contact/>}/>
                  <Route exact path={'/estimate'} element={<Estimate/>}/>
              </Routes>
              <Footer/>
              </StyledEngineProvider>
          </BrowserRouter>

      </ThemeProvider>
  );
}

export default App;

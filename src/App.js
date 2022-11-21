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
import {useState} from 'react';

function App() {
    /**
     * Tabs & Menu state
     * */

    const [tabValue, setTabValue] = useState(0);

    const setTab = (newValue) => {
        setTabValue(newValue);
    };

    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0)

    const setMenuItem = (i) => {
        setSelectedMenuIndex(i)
    }

    /**/

  return (
      <ThemeProvider theme={light}>
          <BrowserRouter>
              <StyledEngineProvider injectFirst>
              <Header selectedTab={tabValue} setSelectedTab={setTab} selectedMenu={selectedMenuIndex} setSelectedMenu={setMenuItem}/>
              <Toolbar sx={{marginBottom: '1em'}}/>
              <Routes>
                  <Route exact path={'/'} element={<Home setSelectedTab={setTab}/>}/>
                  <Route exact path={'/services'} element={<Services setSelectedTab={setTab}/>}/>
                  <Route exact path={'/custom-software'} element={<CustomSoftware setSelectedTab={setTab}/>}/>
                  <Route exact path={'/mobile-apps'} element={<MobileApps setSelectedTab={setTab}/>}/>
                  <Route exact path={'/websites'} element={<Websites setSelectedTab={setTab}/>}/>
                  <Route exact path={'/revolution'} element={<Revolution setSelectedTab={setTab}/>}/>
                  <Route exact path={'/about'} element={<About setSelectedTab={setTab}/>}/>
                  <Route exact path={'/contact'} element={<Contact setSelectedTab={setTab}/>}/>
                  <Route exact path={'/estimate'} element={<Estimate setSelectedTab={setTab}/>}/>
              </Routes>
              <Footer setSelectedTab={setTab} setSelectedMenu={setMenuItem}/>
              </StyledEngineProvider>
          </BrowserRouter>

      </ThemeProvider>
  );
}

export default App;

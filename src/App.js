import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import { Contact } from './pages/Contact';
import { Page404 } from './pages/Page404';
import OfferPage from './pages/Offer';

import { NavMenu } from './components/NavMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <main>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/offer/:offerId">
              <OfferPage />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

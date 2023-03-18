import Page from './Component/CreateProduct/Page';
import LandingPage from './Component/LandingPage/landing-page';
import { createBrowserHistory } from 'history';
import { Router, Route, Link } from 'react-router-dom';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Page} />
        <Route path="/LandingPage" component={LandingPage} />
      </div>
    </Router>
  );
}
export default App;

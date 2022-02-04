import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Vaccine from './Vaccine';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (<>
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/vaccine" component={Vaccine} />
    </Switch>
  </BrowserRouter>
  {/* <Home/>
  <Vaccine/> */}
    </>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Home />
          </Route>

          <Route path="/cart" exact>
            <Navbar />
            <Cart />
          </Route>
          <Route path  = "/details/:id" exact>
              <Navbar/>
              <Details/>
          </Route>
          <Route path  = "/checkout" exact>
              <Navbar/>
              <Checkout/>
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;

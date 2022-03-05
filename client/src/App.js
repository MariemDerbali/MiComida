import logo from './logo.svg';

import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage';
import Cartpage from './screens/Cartpage';
import Loginpage from './screens/Loginpage';
import Registerpage from './screens/Registerpage';
import Orderspage from './screens/Orderspage';
import Adminpage from './screens/Adminpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>

        <Route path="/" exact component={Homepage} />
        <Route path="/cart" exact component={Cartpage} />
        <Route path="/register" exact component={Registerpage} />
        <Route path="/login" exact component={Loginpage} />
        <Route path="/orders" exact component={Orderspage} />
        <Route path="/admin" component={Adminpage} />

      </BrowserRouter>

    </div>
  );
}

export default App;

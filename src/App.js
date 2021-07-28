import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./components/Home";
import './App.css';
import Nav from './components/Nav';
import Cart from "./components/Cart";
import{Provider}from"react-redux";
import store from "./store";
import Detail from "./components/Detail";
function App() {
  return (

<Router>
  <Provider store={store}>
   <Nav/>
   <Route path="/" exact component={Home}/>
   <Route path="/cart" exact component={Cart}/>
   <Route path="/details/:id" exact component={Detail}/>
   </Provider>
    </Router>

  );
}

export default App;

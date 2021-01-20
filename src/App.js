import React, {useState} from 'react'
import Header from './components/Header';
// import { Route, Switch, useLocation } from "react-router-dom";
import { Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Size from './components/Size';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';


function App() {

  const [pizza, setPizza] = useState({ size: "" , base: "", toppings: [] });

  const addSize = (size) => {
    setPizza({ ...pizza, size })
  }
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  console.log(pizza.toppings);
  
  return (
    <div className="App">
      <div className="page-background">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/size">
            <Size addSize={addSize} pizza={pizza} />
          </Route>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

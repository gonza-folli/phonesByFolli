import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <ItemListContainer greeting="BIENVENIDOS A LA TIENDA DE CELULARES by FOLLI"/>
          </Route>
          <Route exact path="/category/:categoryId">
            <NavBar />
            <ItemListContainer greeting="BIENVENIDOS A LA TIENDA DE CELULARES by FOLLI"/>
          </Route>
          <Route exact path="/item/:itemId">
            <NavBar />
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

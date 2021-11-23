import './App.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ContactUs } from './components/ConctactUs/ContactUs';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartProvider/CartProvider';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="BIENVENIDOS A LA TIENDA DE TECNOLOGÍA by FOLLI"/>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer greeting="BIENVENIDOS A LA TIENDA DE TECNOLOGÍA by FOLLI"/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/contactus">
              <ContactUs />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

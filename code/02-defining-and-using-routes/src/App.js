import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import MainHeader from './pages/MainHeader';

function App() {
  return (
    <div>
    <header>
      <MainHeader/>
    </header>
    <div>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/welcome'/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails/>
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
import {Route} from 'react-router-dom'

import Welcome from './components/welcome';
import MainHeader from './components/MainHeader';
import Products from './components/Products'

function App() {
  return (
    <div>
      <header>
        <MainHeader />

      </header>
      <main>        
        <Route path='/welcome'>
          <Welcome/>
        </Route>

        <Route path='/products'>
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;

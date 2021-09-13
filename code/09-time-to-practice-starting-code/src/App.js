import {Route, Switch, Redirect} from 'react-router-dom'

import MainHeader from './components/layout/MainHeader';
import GreatQuotes from './pages/GreatQuotes'
import AddQuote from './pages/AddQuote'
import QuoteDetails from './pages/QuoteDetails'


import classes from './components/layout/css/Layout.module.css'

function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main className={classes.main}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/GreatQuotes'/>          
          </Route>

          <Route path='/GreatQuotes' exact>
            <GreatQuotes/>   
          </Route>

          <Route path='/GreatQuotes/:QuoteId' >
            <QuoteDetails/>          
          </Route>

          <Route path='/AddQuote' exact>
            <AddQuote/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

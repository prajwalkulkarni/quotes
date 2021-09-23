import {Route,Switch, Redirect} from 'react-router-dom'
import QuoteList from './components/quotes/QuoteList';
import Quotes from './pages/Quotes'
import AddQuote from './pages/AddQuote'
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail'
import Layout from './components/layout/Layout';
function App() {
  
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'/>
      </Route>
      <Route path="/quotes" exact>
        <Quotes/>
      </Route>

      <Route path="/quotes/:quoteId">
        <QuoteDetail/>
      </Route>

      <Route path="/new-quote">
        <AddQuote/>
      </Route>

      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;

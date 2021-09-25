import React,{Suspense} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const Quotes = React.lazy(()=>import('./pages/Quotes'))
const AddQuote = React.lazy(()=>import('./pages/AddQuote'))
const QuoteDetail = React.lazy(()=>import('./pages/QuoteDetail'))
const NotFound = React.lazy(()=>import('./pages/NotFound'))
function App() {
  
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
      <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>

          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote">
            <AddQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        
      </Switch>
      </Suspense>
      
    </Layout>
  );
}

export default App;

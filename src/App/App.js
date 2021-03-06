import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Footer from './Footer';
const Home = lazy(() => import('../Home'));
const Documents = lazy(() => import('../Documents'));
const FAQ = lazy(() => import('../FAQ'));


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header className='bg-color-three text-center pt-4 pb-4'>
          <h1 className='font-bold text-lg title-font lg:text-4xl'>
            <a
              title='Presidential Documents'
              href='/'>
              <span className='text-democrat'>Presidential</span>&nbsp;
            <span className='text-republican'>Documents</span>
            </a>
          </h1>
          <p className='text-primary'>Presidential documents signed since 1994</p>
        </header>
        <main>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/faq' component={FAQ} />
                <Route path='/:president/:documentType/:year' component={Documents} />
                <Route path='/:president/:documentType' component={Documents} />
                <Route path='/' component={Home} />
              </Switch>
            </Suspense>
          </Router>
        </main>
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;

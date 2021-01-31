import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './Footer';
const Home = lazy(() => import('../Home'));
const Documents = lazy(() => import('../Documents'));

function App() {
  return (
    <div className="md:container md:mx-auto">
      <header className='text-center'>
        <h1 className='font-bold text-lg title-font lg:text-4xl mt-4'>
          <a href='/'>
            Presidential Documents
          </a>
        </h1>
        <p>Presidential documents signed since 1994</p>
      </header>
      <main>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/:president/:documentType" component={Documents} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

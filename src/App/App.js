import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Home = lazy(() => import('../Home'));
const Documents = lazy(() => import('../Documents'));

function App() {
  return (
    <div className="md:container md:mx-auto">
      <header className="App-header">
      </header>
      <main>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/:president/:document_type" component={Documents} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </Router>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

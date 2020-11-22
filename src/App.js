import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//Importing components
import Header from './components/Header'
import Footer from './components/Footer'

//Importing views
import Home from './views/Home'
import POD from './views/Pod'


// This is my SPA, the header and footer stay constant, but the main tag encompasses the changing views, or the switches.
function App() {

  return ( 
    <div className="app">
      <Router>
        <Header />
        <main className="main">
          <Switch>
            {/* Links to the home view, needs to have the "exact" keyword because otherwise the home view will show for any path, not just the root / */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* This is a route with a wildcard parameter, links to the POD view and takes in the date from the selected picture to render more information about the photo as provided by the API */}
            <Route path="/pod/:date">
              <POD />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

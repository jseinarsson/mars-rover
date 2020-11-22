import './App.css'
//Importing components
import Header from './components/Header'

//Importing views
import Home from './views/Home'

function App() {

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;

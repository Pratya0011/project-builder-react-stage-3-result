import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'></Link>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/Quiz'><Quiz/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

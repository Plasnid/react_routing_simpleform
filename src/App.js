//import logo from './logo.svg';
//import './App.css';
import NameForm from './NameForm';
import Thanks from './Thanks';
import Topics from './Topics';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      <h1>Here we go again!</h1>
        <Switch>
            <Route exact path="/">
              <NameForm />
            </Route>
            <Route path="/thanks">
              <Thanks />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

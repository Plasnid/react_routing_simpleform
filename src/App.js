import React, {useState} from 'react';

//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
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

function App(){
  const [namer, setNamer] = useState('');
  
  const handleChange = (e) => {
    setNamer(e.target.value);
  }
  
  return (
    <Router>
      <div className="App">
        <nav>
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
        </nav>
        <h1>Here we go again!</h1>
        <Switch>
          <Route exact path="/" children={<NameForm handleChange={(e)=>handleChange(e)} />} />
          <Route path="/thanks" children={<Thanks namer={namer}/>}/>
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

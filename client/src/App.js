import React from 'react';
import Navigation from './components/Navigation'
import TodoList from './components/TodoList'
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="" >
      <Navigation />
      <div className="container">
      
    <Switch>
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </Switch>
    
      </div>
  
    </div>

    </Router>
       
    
  );
}

export default App;

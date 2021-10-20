import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Chat from './components/chat/Chat'
import Home from './components/home/Home'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="App">
          <UserContext.Provider value = {{ user, setUser }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

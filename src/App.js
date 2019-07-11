import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// CSS
import './App.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Server from './components/Dashboard/ServerComponent';
// import Mod from './components/Mod/Mod';
// import BanPhrase from './components/BanPhrase/BanPhrase';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-spacer">
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/dashboard/:serverId" component={Server} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          {/* <ProtectedRoute path="/banphrase" component={BanPhrase} />
            <ProtectedRoute path="/mod" component={Mod} /> */}
          <Route
            path="*"
            render={() => <h1>ERROR 404 NOT FOUND</h1>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;

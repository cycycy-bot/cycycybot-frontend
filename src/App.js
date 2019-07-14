import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// CSS
import './App.css';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ServerComponent from './components/ServerComponent/ServerComponent';
import Footer from './components/Footer';
// import Mod from './components/Mod/Mod';
// import BanPhrase from './components/BanPhrase/BanPhrase';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-spacer spacer">
        <Switch>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/dashboard/:serverId" component={ServerComponent} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          {/* <ProtectedRoute path="/banphrase" component={BanPhrase} />
            <ProtectedRoute path="/mod" component={Mod} /> */}
          <Route
            path="*"
            render={() => <h1>ERROR 404 NOT FOUND</h1>}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

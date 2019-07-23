import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// CSS
import './App.css';

// components
import Redirects from './components/Redirect/Redirect';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ServerComponent from './components/ServerComponent/ServerComponent';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="navbar-spacer spacer">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/redirect" component={Redirects} />
        <Route path="/contact" component={Contact} />
        <ProtectedRoute path="/dashboard/:serverId" component={ServerComponent} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route
          path="*"
          render={() => <h1>ERROR 404 NOT FOUND</h1>}
        />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;

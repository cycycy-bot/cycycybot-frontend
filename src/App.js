import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute  from './components/ProtectedRoute/ProtectedRoute';

//CSS
import './App.css';

//components
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Mod from './components/Mod/Mod';
import BanPhrase from './components/BanPhrase/BanPhrase';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <ProtectedRoute path='/banphrase' component={BanPhrase} />
          <ProtectedRoute path='/mod' component={Mod} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
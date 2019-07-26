import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Cookies from 'js-cookie';
import App from './App';

// local state
import { defaults, resolvers } from './state';

// apollo client setup
const client = new ApolloClient({
  uri: 'https://api.cycycy.me/graphql',
  // dev uri
  // uri: 'http://localhost:5000/graphql',
  request: async (operation) => {
    const token = Cookies.get('token');
    operation.setContext({
      headers: {
        'access-token': token || '',
      },
    });
  },
  clientState: {
    defaults,
    resolvers,
  },
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App client={client} />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'),
);

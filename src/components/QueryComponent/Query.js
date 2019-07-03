import React from 'react';
import { Query } from 'react-apollo';

const QueryComp = ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return <div>LOADING...</div>;
      }
      if (error) {
        return `Error!: ${error}`;
      }
      return children(data);
    }}
  </Query>
);

export default QueryComp;

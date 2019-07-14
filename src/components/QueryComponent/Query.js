import React from 'react';
import { Query } from 'react-apollo';
import Loading from '../Loading';

const QueryComp = ({ children, ...props }) => (
  <Query {...props}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }
      if (error) {
        return `Error!: ${error}`;
      }
      return children(data);
    }}
  </Query>
);

export default QueryComp;

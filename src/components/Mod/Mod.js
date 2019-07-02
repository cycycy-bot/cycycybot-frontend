import React from 'react';
import { graphql, compose, Query } from 'react-apollo';

// queries
import { getModQuery } from '../../queries/queries';

const Mod = props => (
  <div>
    <h1>Mod</h1>
    <Query query={getModQuery} variables={{ serverID: '497154569873260585' }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>error</div>;
        return (
          <div>
            <p>{data.mod.serverID}</p>
            <p>{data.mod.serverName}</p>

          </div>
        );
      }
        }
    </Query>
  </div>
);

export default compose(
  graphql(getModQuery, { name: 'getModQuery' }),
)(Mod);

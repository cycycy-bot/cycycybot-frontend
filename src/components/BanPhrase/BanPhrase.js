import React from 'react';
import { graphql, compose, Query } from 'react-apollo';

// queries
import { getBanPhraseQuery } from '../../queries/queries';

class BanPhrase extends React.Component {
    render() {
        return (
            <div>
                <h1>BanPhrase</h1>
                <Query query={getBanPhraseQuery} variables={{serverID: '497154569873260585'}}>
                    {({loading, error, data}) => {
                            if(loading) return <div>Loading...</div>
                            if(error) return <div>err</div>
                            return data.banphrases.map(bp => {
                                return <p key={bp.id}>{bp.banphrase}</p>
                            })
                        }
                    }
                </Query>
            </div>
        );
    }
}

export default compose(
    graphql(getBanPhraseQuery,{name: "getBanPhraseQuery"})
)(BanPhrase);
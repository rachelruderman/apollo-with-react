import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql'
});

const LAUNCHES_PAST_QUERY = gql`
    {
        launchesPast(limit: 2) {
            mission_name
            launch_date_local
        }
    }
`;

client.query({
    query: LAUNCHES_PAST_QUERY
}).then(res => console.log(res));

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
                <Query query={LAUNCHES_PAST_QUERY}>
                    {({loading, data}) => {
                        if (loading) return 'Loading...';
                        const {launchesPast} = data;
                        return launchesPast.map( (launch, i) => {
                            const {mission_name} = launch;
                            return (
                                <h1 key={i}>{mission_name}</h1>
                            )
                        })
                    }}
                </Query>
            </header>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;

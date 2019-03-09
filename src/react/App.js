import React, { Component } from '';
import '../style/App.scss';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql'
});

const LAUNCHES_PAST_QUERY = gql`
    query launchesPast {
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
            <Router>
                <div className="App">
                    <Switch>
                        <Route path='/post/:id' component={}/>
                    </Switch>
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
                </div>
            </Router>

        </ApolloProvider>
    );
  }
}

export default App;

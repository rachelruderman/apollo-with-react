import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launch from './Launches/Launch';
import Launches from './Launches/Launches';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const client = new ApolloClient({uri: 'https://api.spacex.land/graphql'});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Launches}/>
                    <Route path='/launch/:id' component={Launch}/>
                </Switch>
            </Router>
        </ApolloProvider>
    );
  }
}

export default App;

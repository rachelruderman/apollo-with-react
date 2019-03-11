import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from'react-apollo';

const LAUNCH_QUERY = gql`
    query launch($id: ID!) {
        launch(id: $id) {
            mission_name
            launch_date_local
            id
            details
      }
    }
`;

class Launch extends Component {
    render() {
        const {id} = this.props.match.params;

        return (
            <Query query={LAUNCH_QUERY} variables={{id}}>
                { ({data, loading, error}) => {
                    if (loading)    return 'Loading...';
                    if (error)      return 'Error';

                    const {launch} = data;
                    return <h1>{launch.mission_name}</h1>
                }}
            </Query>
        );
    }
}

export default Launch;

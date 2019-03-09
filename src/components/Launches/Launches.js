import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from'react-apollo';
import {Link} from 'react-router-dom';

const LAUNCHES_PAST_QUERY = gql`
    query launchesPast {
        launchesPast(limit: 2) {
            mission_name
            launch_date_local
        }
    }
`;

class Launches extends Component {
    render() {
        return (
            <Query query={LAUNCHES_PAST_QUERY}>
                {({loading, data}) => {
                    if (loading) return 'Loading...';
                    const {launchesPast} = data;
                    return launchesPast.map( (launch, i) => {
                        const {mission_name, id} = launch;
                        return (
                            <Link to={`launch/${id}`} key={i}>
                                <h1>{mission_name}</h1>
                            </Link>
                        )
                    })
                }}
            </Query>
        );
    }
}

export default Launches;

import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from'react-apollo';
import {Link} from 'react-router-dom';

const LAUNCHES_PAST_QUERY = gql`
    query launchesPast {
        launchesPast(limit: 12) {
            mission_name
            launch_date_local
            id
        }
    }
`;

class Launches extends Component {
    render() {
        return (
            <ul>
                <Query query={LAUNCHES_PAST_QUERY}>
                    {({loading, data}) => {
                        if (loading) return 'Loading...';
                        const {launchesPast} = data;
                        return launchesPast.map( ({mission_name, id}) => {
                            return (
                                <li key={id}>
                                    <Link to={`launch/${id}`}>{mission_name}</Link>
                                </li>
                            )
                        })
                    }}
                </Query>
            </ul>
        );
    }
}

export default Launches;

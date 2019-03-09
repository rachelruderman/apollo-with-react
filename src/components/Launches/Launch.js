import React, { Component } from 'react';
import gql from 'graphql-tag';

const LAUNCHES_PAST_QUERY = gql`
    query launchesPast {
        launchesPast(limit: 2) {
            mission_name
            launch_date_local
        }
    }
`;

class Launch extends Component {
    render() {
        return (
            <div>
                hey
                {/*<header className="App-header">*/}

                {/*</header>*/}
            </div>
        );
    }
}

export default Launch;

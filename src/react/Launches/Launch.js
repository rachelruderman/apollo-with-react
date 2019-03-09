import React, { Component } from 'react';
import {Query} from 'react-apollo';

export default class Launch extends Component {
    render() {
        return (
            <div>
                <Query query={}>
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
        );
    }
}

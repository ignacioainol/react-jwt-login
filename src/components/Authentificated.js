import React, { Component } from 'react'
import { getJwt } from './../helpers/jwt';
import { withRouter } from 'react-router-dom';
import axios from 'axios'


class Authenticated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJwt();
        if (!jwt) {
            this.props.history.push('/login');
        }

        axios.get('http://localhost:3005/v1/users/getUser', { headers: { Authorization: `Bearer ${jwt}` } })
        .then(res => this.setState({
            user: res.data
        }))
        // .catch(err => {
        //     localStorage.removeItem('cyrax-jwt');
        //     this.props.history.push('/login');
        // })
    }


    render() {
        if (this.state.user === undefined) {
            return <div>Loading ...</div>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Authenticated);
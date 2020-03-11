import React, { Component } from 'react'
import  {getJwt} from './../helpers/jwt';

class Authenticated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user:undefined
        }
    }

    componentDidMount(){
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div>Hello from auth</div>
        )
    }
}

export default Authenticated;
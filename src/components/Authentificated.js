import React, { Component } from 'react'

class Authenticated extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user:undefined
        }
    }

    render() {
        return (
            <div>Hello from auth</div>
        )
    }
}

export default Authenticated;
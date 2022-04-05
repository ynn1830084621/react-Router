import React, { Component } from 'react';
class Index extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (    
            <h2>ynn.com{console.log(this.props)}</h2>
        );
    }
}
 
export default Index;
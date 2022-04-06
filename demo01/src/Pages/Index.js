import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            list: [
                {cid: 1, title: '计划1'},
                {cid: 2, title: '计划2'},
                {cid: 3, title: '计划3'},
            ]
        }
    }
    render() { 
        return ( 
            <div>
                <h2>ynn.com</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link to={'/list/' + item.cid}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        );
    }
}
 
export default Index;
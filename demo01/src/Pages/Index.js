import React, { Component } from 'react';
import {Link , Redirect} from 'react-router-dom';
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
        console.log(this.props, '333')
        this.props.history.push("/home/");//标签式重定向
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to="/home/" />  标签式重定向 */}
            
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
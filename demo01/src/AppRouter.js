import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';


function AppRouter(props) {
    console.log(props, 'props1')
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/list/:id" component={List} />
            </Switch>
        </Router>
    );
}
export default AppRouter;
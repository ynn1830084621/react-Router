import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

//设置规则 --- 传递值 --- 接受值 ---显示内容
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
                <Route path="/home/" component={Home} />
            </Switch>
        </Router>
    );
}
export default AppRouter;
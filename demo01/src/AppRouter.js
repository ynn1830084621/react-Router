import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';


function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/list/:id" element={<List />} />
            </Routes>
        </Router>
    );
}
export default AppRouter;
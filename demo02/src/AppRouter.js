import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import Video from './Pages/Video';
import WorkPlace from './Pages/WorkPlace';
import './index.css';

function AppRouter() {
    let routeConfig = [
        {path:"/", title: "博客首页", exact:true, element:<Index/> },
        {path:"/video/*", title: "视频教程", exact:false, element:<Video/> },
        {path:"/workplace/*", title: "职场技能", exact:false, element:<WorkPlace/> }
    ]
    return (
        <Router>
            <div className='mainDiv'>
                <div className='leftNav'>
                    <h3>一级导航</h3>
                    <ul>
                        {/* <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video/*">视频教程</Link></li>
                        <li><Link to="/workplace/*">职场技能</Link></li> */}
                        {
                            routeConfig.map((item, index) => {
                                return (<li key={index}><Link to={item.path}>{item.title}</Link></li>)
                            })
                        }
                    </ul>
                </div>             
                <div className='rightMain'>
                    {/* <Routes> */}
                        {/* <Route path="/" exact element={<Index/>} />
                        <Route path="/video/*" element={<Video/>} />
                        <Route path="/workplace/*" element={<WorkPlace/>} /> */}
                    {/* </Routes> */}
                    {
                            routeConfig.map((item, index) => {
                                return (
                                    <Routes key={index}>
                                        <Route path={item.path} exact={item.exact} element={item.element} />
                                    </Routes>
                                )
                            })
                            
                        }
                </div>            
            </div>
        </Router>
    )
}
export default AppRouter;
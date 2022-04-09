import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Money from './workPlace/Money';
import Getup from './workPlace/Getup';

function WorkPlace() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to="workplace/Moeny">加薪秘籍</Link></li>
                    <li><Link to="workplace/Getup">早起攻略</Link></li>
                </ul>
            </div>
            <div className='workPlaceContent'>
                <div><h3>职场软技能</h3></div>
                <Routes>
                    <Route path="workplace/Moeny" element={<Money/>} />
                    <Route path="workplace/Getup" element={<Getup/>} />
                </Routes>
            </div>
        </div>
    )
}
export default WorkPlace;
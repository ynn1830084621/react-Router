import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Reactpage from './video/ReactPage';
import Flutter from './video/Flutter';
import Vue from './video/Vue';

function Video() {
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li><Link to = "video/Reactpage">React教程</Link></li>
                    <li><Link to = "video/Flutter">Flutter教程</Link></li>
                    <li><Link to = "video/Vue">Vue教程</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>教程视频</h3></div>
                <Routes>
                    <Route path="video/Reactpage" element={<Reactpage/>} />
                    <Route path="video/Flutter" element={<Flutter/>} />
                    <Route path="video/Vue" element={<Vue/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Video;
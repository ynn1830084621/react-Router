import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(<AppRouter/>);
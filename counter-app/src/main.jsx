import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './components/FirstApp';
import './global.css'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
)
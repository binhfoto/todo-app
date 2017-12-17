import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TodoApp from './components/TodoApp';

ReactDOM.render(
    <div className="app">
        <TodoApp />

    </div>,
    document.getElementById('root'));
registerServiceWorker();

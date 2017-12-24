import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import TodoApp from './components/TodoApp';

ReactDOM.render(
    <div className="app">
        <TodoApp />
    </div>,
    document.getElementById('root'));
registerServiceWorker();

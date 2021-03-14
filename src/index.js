import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

const App = () => {
    //return <h1>movie-list</h1> // See code below
    return <List />
};

ReactDOM.render(<App />, document.getElementById('root'));
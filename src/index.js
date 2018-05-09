import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuZ5z6-XyS3ct-Cucodz78mWq97V21IQE';


//create a new components.  This compenet should produce some html
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
}

//take components generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));

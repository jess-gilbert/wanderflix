import React from 'react';
import {render, fireEvent, getByTestId, getByPlaceholderText } from '@testing-library/react';
import SearchBar from '../searchBar';
import {BrowserRouter as Router} from 'react-router-dom';


describe('input field', () => {
     // Our first test will check that the 
    // input field renders correctly.
    it('renderscorrectly',()=> {
        const {getByPlaceholderText} = render(
            <Router>
                <SearchBar/>
            </Router>,
        );
        expect(getByPlaceholderText('Enter your destination')).toBeInTheDocument();
    })

    it('updates on change', () => {
    // Our second test will check that the 
    // input field changes when the user types into the search bar.
        const {getByPlaceholderText} = render(
            <Router>
                <SearchBar/>
            </Router>,
        );
        const message = getByPlaceholderText('Enter your destination');
        fireEvent.change(message, {target: {value: 'Tokyo'}});
        expect(message.value).toBe('Tokyo');

    });
})


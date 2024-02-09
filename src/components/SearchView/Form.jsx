import React from 'react';
import { useDispatch } from 'react-redux';
import { searchGifsRequest } from '../../redux/actions'; 

export default function Form() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchQuery = e.target.elements.searchQuery.value; 
        dispatch({
            type: "FETCH_GIF",
            payload: searchQuery
    }); 
        console.log(searchQuery);
    };

    return (
        <>
            <div className="w3-card-4">
                <div className="w3-container w3-green">
                    <h2>Search For Gifs!</h2>
                </div>
                <form className="w3-container" onSubmit={handleSubmit}>
                    <input
                        name="searchQuery" 
                        className="w3-input w3-animate-input"
                        type="text"
                        placeholder="Find Gifs Here"
                        style={{ width: '30%' }}
                    />
                    <button type="submit" className="w3-button w3-blue">Search</button>
                </form>
            </div>
        </>
    );
}
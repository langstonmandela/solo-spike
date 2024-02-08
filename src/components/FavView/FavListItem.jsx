import { useState } from "react";
import {useSelector} from "react-redux";
export default function FavListItem({gif}) {
    
    const categories = useSelector(store => store.categoryList);

    return (
    <>
        <div className="w3-container">
            <li key={gif.id}><img src={gif.gif_url} /></li>
            <div className="w3-dropdown-hover w3-light-grey">
                {/* button text conditionally renders based on what is in store. dropdowns set store */}
                <span><button className="w3-button">Assign Catgory</button>
                    <button className="w3-button">Delete</button></span>
                <div className="w3-dropdown-content w3-bar-block w3-border">
                    {categories.length === 0 ? <h2>Loading...</h2> :
                        categories.map(category => (
                            <button key={category.id} className="w3-bar-item w3-button">{category.name}</button>
                        ))}
                </div>
            </div>
        </div>
    </>
    )
}
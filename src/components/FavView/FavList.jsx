import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FavList() {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);
    const categories = useSelector(store => store.categoryList);

    useEffect(() => {
        dispatch({ type: "FETCH_FAVS" });
        dispatch({ type: "FETCH_CATEGORIES"});
    }, []);

    const assignCategory = (e) => {
        
    }

    return (
        <>
            <h1>IN FavList</h1>
            <ul>{favoriteList.length === 0 ? <h2>Loading...</h2> :
                favoriteList.map(gif => (
                    <div className="w3-container">
                        <li key={gif.id}><img src={gif.gif_url} /></li>
                            <div className="w3-dropdown-hover w3-light-grey">
                                {/* button text conditionally renders based on what is in store. dropdowns set store */}
                            <button className="w3-button">Assign Catgory</button>
                            <div className="w3-dropdown-content w3-bar-block w3-border">
                                {categories.length === 0 ? <h2>Loading...</h2> : 
                                categories.map(category => (
                                    <button key={category.id} className="w3-bar-item w3-button">{category.name}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}</ul>
        </>
    )
}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavListItem from "./FavListItem";

export default function FavList() {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);
    const categories = useSelector(store => store.categoryList);
    const [filterCategory, setFilterCategory] = useState("");

    useEffect(() => {
        dispatch({ type: "FETCH_FAVS" });
        dispatch({ type: "FETCH_CATEGORIES"});
    }, []);

    const filterFavorites = (e) => {
        if (e.target.textContent === "all") {
            setFilterCategory("");
        }
        setFilterCategory(e.target.textContent);
    }

    return (
        <>
            <h1>IN FavList</h1>
            <div className="w3-bar-item">Filter by:</div>
            <div className="w3-dropdown-hover w3-light-grey">
                    <span>
                        {/* Conditionally render button text, make filter work */}
                    <button className="w3-button">{filterCategory == "" ? "all" : filterCategory}</button></span>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                        <button onClick={(filterFavorites)} className="w3-bar-item w3-button">all</button>
                        {categories.length === 0 ? <h2>Loading...</h2> :
                            categories.map(category => (
                                <button onClick={(filterFavorites)} key={category.id} data-category={category.id} className="w3-bar-item w3-button">{category.name}</button>
                            ))}
                    </div>
                </div>
            <ul>{favoriteList.length === 0 ? <h2>Loading...</h2> :
                favoriteList.map(gif => (
                   <FavListItem gif={ gif }/>
                ))}</ul>
        </>
    )
}
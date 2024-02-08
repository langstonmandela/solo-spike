import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FavList() {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);

    useEffect(() => {
        dispatch({ type: "FETCH_FAVS" });
    }, []);

    return (
        <>
            <h1>IN FavList</h1>
            <ul>{favoriteList.length === 0 ? <h2>Loading...</h2> :
                favoriteList.map(gif => (
                    <div class="w3-dropdown-hover">
                        <li key={gif.id}><img src={gif.gif_url} /></li>
                        <div>
                            <button className="w3-button">Assign Catgory</button>
                            <div className="w3-dropdown-content w3-bar-block w3-border">
                                <a href="#" class="w3-bar-item w3-button">Wild</a>
                                <a href="#" class="w3-bar-item w3-button">Uproarious</a>
                                <a href="#" class="w3-bar-item w3-button">Poignant</a>
                                <a href="#" class="w3-bar-item w3-button">Felicitous</a>
                                <a href="#" class="w3-bar-item w3-button">Whimsical</a>
                            </div>
                        </div>
                    </div>
                ))}</ul>
        </>
    )
}
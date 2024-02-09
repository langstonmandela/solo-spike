import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavListItem from "./FavListItem";

export default function FavList() {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);

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
                   <FavListItem gif={ gif }/>
                ))}</ul>
        </>
    )
}
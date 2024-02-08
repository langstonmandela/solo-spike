import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";

export default function FavList () {
    const dispatch = useDispatch();
    const favoriteList = useSelector(store => store.favoriteList);

    useEffect(() => {
        dispatch({type: "FETCH_FAVES"});
    }, []);
    
    return (
        <>
        <h1>IN FavList</h1>
        <ul>{favoriteList.length === 0 ? <h2>Loading...</h2> : 
        favoriteList.map(gif => (
            <li key={gif.id}><img src={gif.gif_url} /></li>
        ))}</ul>
        </>
    )
}
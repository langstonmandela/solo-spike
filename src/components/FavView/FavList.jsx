import { useEffect, useSelector } from "react";

export default function FavList () {
    const favoriteList = useSelector(store => store.favoriteList);
    
    return (
        <>
        <h1>IN FavList</h1>
        <ul>{favoriteList.map(gif => (
            <li key={gif.id}><img src={gif.gif_url} /></li>
        ))}</ul>
        </>
    )
}
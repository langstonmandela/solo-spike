import { useDispatch } from 'react-redux';
export default function ListItem ({url}) {
    const dispatch = useDispatch();
    function likeGif(url) {
        dispatch({
            type: 'POST_FAV',
            payload: url
        })
    }

    return (
        <>
            <h1>IN ListITem</h1>
            <div>
                <img src={url}/>
                <button onClick={()=>{
                    likeGif(url)
                }}>like</button>
            </div>
        </>
        
        
    )
}
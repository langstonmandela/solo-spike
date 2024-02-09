import { useDispatch } from 'react-redux';
export default function ListItem ({url, title}) {
    const dispatch = useDispatch();
    function likeGif(url) {
        dispatch({
            type: 'POST_FAV',
            payload: url
        })
    }

    return (
        <>
            <div className="w3-col s4 w3-center w3-margin-top w3-row-padding">
                <div className="w3-card-4 w3-padding-32">
                    <img style={{width: '350px', height: '300px'}} src={url} />
                    <p>{title}</p>
                    <button onClick={()=>{
                    likeGif(url)}}>like</button>
                </div> 
            </div>
            
        </>
        
        
    )
}
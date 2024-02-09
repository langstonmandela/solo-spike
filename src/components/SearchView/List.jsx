import ListItem from "./ListItem";
import { useSelector } from 'react-redux';
// Error in POST /api/favorites error: null value in column "gif_url" of relation "favorites" violates not-null constraint
export default function List () {
    const gifList = useSelector(s=>s.gifList);

    return (
        <>
        <div className="w3-container">
            {
            gifList.data?.map((gif,i)=><ListItem key={i} url={gif.images.original.url} title= {gif.title} />)
        }
        </div> 
        </>
    )
}

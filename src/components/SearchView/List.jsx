import ListItem from "./ListItem";
import { useSelector } from 'react-redux';

export default function List () {
    const gifList = useSelector(s=>s.gifList);
    console.log(gifList);
    //data[0].images.original.url

    return (
        <>
        <h1>IN LIST</h1>
        {
            gifList.map((gif,i)=><ListItem key={i} props={gif.data[0].images.original.url}/>)
        }
        </>
    )
}
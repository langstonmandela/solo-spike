import ListItem from "./ListItem";
import { useSelector } from 'react-redux';
// Error in POST /api/favorites error: null value in column "gif_url" of relation "favorites" violates not-null constraint
export default function List () {
    const gifList = useSelector(s=>s.gifList);
    // console.log(gifList);
    //data[0].images.original.url

    let data = [
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}},
        {"images": { "original" : {"url" : "https://media2.giphy.com/media/PRJ5uWuZ8tX6KGpJS2/giphy.gif?cid=3c5535d5kmgjukfqtc2wjp1ymy9vk7lxylfrc6hy8jk5b7ks&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}}
    ]

    return (
        <>
        <div className="w3-container">
            {
            gifList.data?.map((gif,i)=><ListItem key={i} url={gif.images.original.url} />)
        }
        </div> 
        </>
    )
}

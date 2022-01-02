import { Posts } from '../../dummyData';
import Share from '../Share/Share';
import './Feed.css';
import Post from './../Post/Post';
import { useState, useEffect } from 'react';

const Feed = () => {
    const [postData, setPostData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPostData(data))
    },[])
    return (
        <div className="feed">
           <div className="feedWrapper">
               <Share/>
               {Posts.map(p => <Post key={p.id} postData={postData} post = {p}/>)}

  
               
           </div>
        </div>

    );
};

export default Feed;
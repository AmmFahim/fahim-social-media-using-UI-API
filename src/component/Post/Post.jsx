import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import {useState} from "react";

const Post = (props) => {
    const {desc,photo,date,like,comment} = props.post;
    const [likee, setLikee] = useState(like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setLikee(isLiked ? likee-1 : likee+1);
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === props.post?.userId)[0].profilePicture} alt="" className="postPersonImage" />
                    <div className="topPostLeftText">
                        <span className="postUserName">{Users.filter((u) => u.id === props.post?.userId)[0].username}</span>
                        <br/>
                        <span className="postDate">{date}</span>
                    </div>
                    </div>


                    <div className="postTopRight">
                        <MoreVertIcon className="postIcon"/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{likee} people react on it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentList">{comment} comment</span>
                    </div>
                </div>
            </div>

            
            
        </div>
        

    );
};

export default Post;
import './Online.css';
import { Users } from '../../dummyData';

const Online = (props) => {
    const {profilePicture,username} = props.user;
    return (
        <>
            <li className="onlineFriend">
                <div className="onlineFriendImageContainer">
                    <img src={Users.filter((u) => u.id === props.user?.id)[0].profilePicture} alt="" className="onlineFriendImage" />
                    <span className="greenDot"></span>
                </div>
                <span className="OnlineFriendName">{username}</span>
           </li>            
        </>


    );
};

export default Online;
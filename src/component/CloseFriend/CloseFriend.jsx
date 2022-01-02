import './CloseFriend.css';
import { Users } from '../../dummyData';

const CloseFriend = (props) => {
    const {username} = props.user;
    return (
        <div>
            <li className="sidebarFriend">
                <img src={Users.filter((u) => u.id === props.user?.id)[0].profilePicture} alt="" className="sidebarFriendImage" />
                <span className="sidebarFriendName">{username}</span>
            </li>
        </div>
    );
};

export default CloseFriend;
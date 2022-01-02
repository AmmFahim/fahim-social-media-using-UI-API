import './Sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriend from '../CloseFriend/CloseFriend';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data))

    },[])
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Feed</span>

                    </li>
                    <li className="sidebarListItem">
                        <MarkUnreadChatAltIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Chat</span>

                    </li>
                    <li className="sidebarListItem">
                        <VideoLibraryIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Videos</span>

                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Groups</span>

                    </li>
                    <li className="sidebarListItem">
                        <BookmarksIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Bookmarks</span>

                    </li>
                    <li className="sidebarListItem">
                        <HelpCenterIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Help Center</span>

                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Jobs</span>

                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Events</span>

                    </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className="sidebarIcon"/>
                        <span className="sidebarIconText">Courses</span>

                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {users.map(u=> <CloseFriend key = {u.id} user = {u}/>)}


                </ul>
            </div>

        </div>

    );
};

export default Sidebar;
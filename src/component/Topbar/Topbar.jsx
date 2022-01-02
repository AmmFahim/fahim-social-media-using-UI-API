import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Topbar.css'

const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">FahimSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchIcon className="searchIcon"></SearchIcon>
                    <input placeholder='    Search for friend, post or video ' className="searchInput" />

                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                <div className="topbarIcon">
                    <PersonIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIcon">
                    <ChatIcon/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIcon">
                    <NotificationsIcon/>
                    <span className="topbarIconBadge">1</span>
                </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
                
            </div>
           
        </div>
    );
};

export default Topbar;
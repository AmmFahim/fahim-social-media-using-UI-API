import { Users } from '../../dummyData';
import './Rightbar.css';
import Online from './../Online/Online';
import { useEffect, useState } from 'react';

export default function Rightbar ({profile}) {

    
    const HomeRightbar = () => {
        const [users,setUsers] = useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data => setUsers(data))

        },[])
        return (
            <div>
                <div className="birthdayContainer">
                   <img src="/assets/gift.png" alt="" className="birthdayIcon" />
                   <span className="birthdayText">
                       <b> pola foster</b> and <b> 3 other friends </b>have birthday today
                   </span>
               </div>
               <img src="/assets/ad.png" alt="" className="rightbarExtraImage" />
               <h4 className="onlineFriends">Online Friends</h4>
               <ul className="onlineFriendsList">
               {users.map(u => <Online key={u.id} user = {u}/>)}  
               </ul>
            </div>
        );
    };
    
    const ProfileRightbar = () => {
        return (
            <div className="rightbarUserInformation">
                <h2 className="rightbarInformationTitle">User Information</h2>
                <div className="userInfo">
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">City:</div>
                        <span className="rightbarInfoValue">Chittagong</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">Country:</div>
                        <span className="rightbarInfoValue">Bangladesh</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">Education:</div>
                        <span className="rightbarInfoValue">B.Sc Engineering in CSE</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <div className="rightbarInfoKey">Relationship:</div>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h2 className="rightbarInformationTitle">User Friends</h2>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="followingImage" />
                        <span className="followingName">john carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/8.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/9.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/10.jpeg" alt="" className="followingImage" />
                        <span className="followingName">John carter</span>
                    </div>
                    
                </div>
            </div>
        );
    };
    
    
    return (
        <div className="rightbar" >
           <div className="rightbarWrapper">
           {profile ? <ProfileRightbar/>: <HomeRightbar/>}

           </div>
        </div>
    );
};

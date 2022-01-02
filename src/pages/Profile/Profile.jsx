import Feed from "../../component/Feed/Feed";
import Rightbar from "../../component/Rightbar/Rightbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Topbar from "../../component/Topbar/Topbar";
import './Profile.css';

const Profile = () => {
    return (
        <div>
                <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop"> 
                    <div className="profileCover">
                        <img src="/assets/post/3.jpeg" alt="" className="profileCoverImage" />
                        <img src="/assets/person/7.jpeg" alt="" className="profileUserImage" />
                    </div>
                    <div className="infoSection">
                        <h2 className="profileUserName">Amm Fahim</h2>
                        <span className="profileDescription">No motivation is here !!!</span>
                    </div>

                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
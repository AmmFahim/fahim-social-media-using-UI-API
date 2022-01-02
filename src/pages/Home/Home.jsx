import Feed from "../../component/Feed/Feed";
import Rightbar from "../../component/Rightbar/Rightbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Topbar from "../../component/Topbar/Topbar";
import './Home.css'

function Home() {
    return (
        <div>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>

            </div>
        </div>
    );
}

export default Home;
import './Share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideocamIcon from '@mui/icons-material/Videocam';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import LabelIcon from '@mui/icons-material/Label';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="sharePersonImage" />
                    <input placeholder="  What's in your mind ?" className="shareInput" />
                    

                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                        <VideocamIcon htmlColor = "#FA383E" className="shareOptionIcon"/>
                            <span className="shareOptionText">Live Video</span>
                        </div>
                        <div className="shareOption">
                        <PermMediaIcon htmlColor = "#00A400" className="shareOptionIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                        <LabelIcon htmlColor = "blue" className="shareOptionIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                        <AddLocationIcon htmlColor = "green" className="shareOptionIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                        <SentimentVerySatisfiedIcon htmlColor = "goldenrod" className="shareOptionIcon"/>
                            <span className="shareOptionText">Feeling / Activity</span>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Share;
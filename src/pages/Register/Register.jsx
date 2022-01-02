import './Register.css';

const Register = () => {
    return (
        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">FahimSocial</div>
                <div className="loginDesc">Connect With your Friend Around the world using FahimSocial</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;
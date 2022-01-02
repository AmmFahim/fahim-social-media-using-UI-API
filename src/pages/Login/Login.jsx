import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">FahimSocial</div>
                    <div className="loginDesc">Connect With your Friend Around the world using FahimSocial</div>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="forgotPassword">Forgot Password ?</span>
                        <button className="loginRegButton">Create A New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
export default function Login() {
    return (
        <div className="whole">
            <div className="wrapper">
                <div className="title">
                    Login Form
                </div>
                <form action="#">
                    <div className="field">
                        <input type="text" required/>
                            <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" required/>
                            <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login"/>
                    </div>
                    <div className="signup-link">
                        Not a member? <a href="#">Sign up now</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
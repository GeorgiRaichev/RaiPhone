import AuthContext from "../../contexts/authContexts";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import '../Login/login.css'
import { Link } from "react-router-dom";

export default function Login(message) {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: '',
    });

    return (
        <div className="whole">
            <div className="wrapper">
                <div className="title">
                    Login Form
                </div>
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <input type="email" name="email" onChange={onChange} value={values.email}  />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" onChange={onChange} value={values.password}  />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div>
                        {message && (<p className="Error">{Object.values(message)}</p>)}
                    </div>
                    <div className="signup-link">
                        Not a member? <Link to='/register'>Sign up now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
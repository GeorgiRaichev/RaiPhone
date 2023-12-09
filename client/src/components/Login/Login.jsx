import AuthContext from "../../contexts/authContexts";
import useForm from "../hooks/useForm";
import { useState } from "react";
import { useContext } from "react";
import '../Login/login.css'
import { Link } from "react-router-dom";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',

}
export default function Login(message) {
    const [emailMatch, setEmailMatch] = useState(true);
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm((formValues) => {
        const ifEmail = (formValues[LoginFormKeys.Email]).includes('@');
        if (ifEmail) {
            setEmailMatch(true);
            loginSubmitHandler(formValues);

        } else {
            !ifEmail ? setEmailMatch(false) : setEmailMatch(true);
        }

    },
        {
            [LoginFormKeys.Email]: '',
            [LoginFormKeys.Password]: '',
        }
    )

    return (
        <div className="whole">
            <div className="wrapper">
                <div className="title">
                    Login Form
                </div>
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <input  name="email" onChange={onChange} value={values.email} required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input  name="password" onChange={onChange} value={values.password} required />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div>
                        {message && (<p className="Error">{Object.values(message)}</p>)}
                        {!emailMatch && (<p className="Error">Email format is not correct!</p>)}
                    </div>
                    <div className="signup-link">
                        Not a member? <Link to='/register'>Sign up now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
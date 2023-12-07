import useForm from "./hooks/useForm";

export default function Login({
    loginSubmitHandler,
}) {
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
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
                        <input type="email" name="email" onChange={onChange} value={values.email} />
                            <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" onChange={onChange} value={values.password} />
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
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../contexts/authContexts";
import useForm from "../hooks/useForm";
import '../Register/register.css'


const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirmPassword',
  Username: 'username',
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailMatch, setEmailMatch] = useState(true);
  const { values, onChange, onSubmit } = useForm((formValues) => {
    const ifPassowrds = formValues[RegisterFormKeys.Password] === formValues[RegisterFormKeys.ConfirmPassword];
    const ifEmail = formValues[RegisterFormKeys.Email].includes('@');
    if (ifPassowrds && ifEmail) {
      setPasswordMatch(true);
      setEmailMatch(true);
      registerSubmitHandler(formValues);

    } else {
      !ifPassowrds ? setPasswordMatch(false) : setPasswordMatch(true);
      !ifEmail ? setEmailMatch(false) : setEmailMatch(true);
    }

  },
    {
      [RegisterFormKeys.Email]: '',
      [RegisterFormKeys.Password]: '',
      [RegisterFormKeys.ConfirmPassword]: '',
      [RegisterFormKeys.Username]: '',
    }
  )

  return (

    <div className="reg-bod">
      <div className="reg-container">
        <div className="reg-title">Registration</div>
        <div className="content">
          <form onSubmit={onSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" name="username" onChange={onChange} values={values[RegisterFormKeys.Username]} required />
              </div>
              <div className="input-box">
                <span className="details" >Email</span>
                <input type="text" placeholder="Enter your email" name="email" onChange={onChange} values={values[RegisterFormKeys.Email]} required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" name="phoneNumber" required="" />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password"  name="password" onChange={onChange} values={values[RegisterFormKeys.Password]} required />
              </div>
              <div className="input-box">
                <span className="details" id="cnfPsw" >Confirm Password</span>
                <input type="text" placeholder="Confirm your password" id="cnfPsw" name="confirmPassword" onChange={onChange} values={values[RegisterFormKeys.ConfirmPassword]} required />
              </div>
              <div>
                {!passwordMatch && (<p>Passwords don't match!</p>)}
                {!emailMatch && (<p>Email must include @!</p>)}
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="reg-button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
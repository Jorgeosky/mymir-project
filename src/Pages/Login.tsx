import { Input, Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../Query/Firebase';

export default function Login() {
  const [state, setState] = useState('LOGIN');
  const [validate, setValidate] = useState(true);
  const navigate = useNavigate();

  function SendLogin(data: any) {
    data.preventDefault();
    const { Email, Password1, Password2 } = data.target.elements;
    if (Password1.value !== Password2.value) {
      setValidate(false);
    } else {
      const data2 = SignUp(Email.value, Password1.value);
      if (data2.state) {
        navigate('/');
      } else {
        console.log(data2.errorCode, data2.errorMessage);
      }
    }
  }

  switch (state) {
    case 'LOGIN':
      return (
        <div className="Login">
          <div className="Container">
            <h2>LOGIN</h2>
            <Button type="button" color="error" auto>
              <img src="googleIcon.png" alt="googleIcon" />
              Continue with google
            </Button>
            <h3>Or</h3>
            <form>
              <Input placeholder="Email" />
              <Input.Password placeholder="Password" />
              <Button type="button" color="error" auto>
                Login
              </Button>
            </form>
            <Button
              onClick={() => setState('FORGOT')}
              color="error"
              auto
              light
              className="forgot"
            >
              Forgot Password
            </Button>
            <h4>
              {'Dont have an account? '}
              <Button
                light
                onClick={() => setState('REGISTER')}
                color="error"
                auto
              >
                register
              </Button>
            </h4>
          </div>
        </div>
      );
    case 'REGISTER':
      return (
        <div className="Login">
          <div className="Container">
            <h2>REGISTER</h2>
            <Button type="button" color="error" auto>
              <img src="googleIcon.png" alt="googleIcon" />
              Continue with google
            </Button>
            <h3>Or</h3>
            <form onSubmit={SendLogin}>
              <Input id="Email" name="Email" placeholder="Email" />
              <Input.Password
                id="Password1"
                name="Password1"
                placeholder="Password"
              />
              <Input.Password
                id="Password2"
                name="Password2"
                placeholder="Confirm Password"
              />
              {!validate ? <h4>the password is not coincided</h4> : ''}
              <Button type="submit" color="error" auto>
                Register
              </Button>
            </form>
            <h5>
              Signing up signifies that you have read and agree to our Terms of
              Service and our Privacy Policy.
            </h5>
            <h4>
              {'Already have an account? '}
              <Button
                light
                onClick={() => setState('LOGIN')}
                color="error"
                auto
              >
                Login
              </Button>
            </h4>
          </div>
        </div>
      );
    case 'FORGOT':
      return (
        <div className="Login">
          <div className="Container2">
            <h2>FORGOT PASSWORD</h2>
            <form>
              <Input placeholder="Email" />
              <Button type="button" color="error" auto>
                Submit
              </Button>
            </form>
            <h3>Or</h3>
            <Button light onClick={() => setState('LOGIN')} color="error" auto>
              Login
            </Button>
          </div>
        </div>
      );
    default:
      return (
        <div className="Login">
          <div className="Container"> </div>
        </div>
      );
  }
}

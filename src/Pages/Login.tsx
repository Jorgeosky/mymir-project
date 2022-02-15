import { Input, Button } from '@nextui-org/react';
import React, { useState } from 'react';

export default function Login() {
  const [state, setState] = useState(true);
  return (
    <div className="Login">
      <div className="Container">
        <h2>{state ? 'Login' : 'Register'}</h2>
        <Button type="button" color="error" auto>
          <img src="googleIcon.png" alt="googleIcon" />
          Continue with google
        </Button>
        <h3>Or</h3>
        <Input placeholder="Email" />
        <Input.Password placeholder="Password" />
        {!state ? <Input.Password placeholder="Confirm Password" /> : ''}
        <Button type="button" color="error" auto>
          {state ? 'Login' : 'Register'}
        </Button>
        {state ? (
          <>
            <Button color="error" auto light className="forgot">
              Forgot Password
            </Button>
            <h4>
              {'Dont have an account? '}
              <Button light onClick={() => setState(!state)} color="error" auto>
                register
              </Button>
            </h4>
          </>
        ) : (
          <>
            <h5>
              Signing up signifies that you have read and agree to our Terms of
              Service and our Privacy Policy.
            </h5>
            <h4>
              {'Already have an account? '}
              <Button light onClick={() => setState(!state)} color="error" auto>
                Login
              </Button>
            </h4>
          </>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router';

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();

  return (
    <div>
      <p>Register Page</p>
      <form
        onSubmit={async e => {
          e.preventDefault();
          const response = await register({
            variables: {
              email,
              password
            }
          });
          console.log(response);

          history.push('/');
        }}
      >
        <div>
          <input
            type='email'
            value={email}
            placeholder='Email'
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type='password'
            value={password}
            placeholder='Password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

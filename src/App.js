import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <Form className='login-form'>
      <h1>
        <span className='font-weight-bold'>My App</span>.com
      </h1>
      <h2 className='text-center'>Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type='email' placeholder='Email'></Input>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type='password' placeholder='Password'></Input>
      </FormGroup>
      <Button className='btn-lg btn-dark btn-block'>Log In</Button>
      <div className='text-center pt-3'>Continue With Social Account</div>
      <FacebookLoginButton className='mt-3 mb-3'></FacebookLoginButton>
      <div className='text-center'>
        <a href='/sign-up'>Sign Up</a>
        <span className='p-2'>|</span>
        <a href='/forgot-passowrd'>Forgot Password</a>
      </div>
    </Form>
  );
}

export default App;

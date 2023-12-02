import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import Spinner from './Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/login.css';
import { loginimg } from '../assets/home';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const SubmitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', values);
      setLoading(false);
      localStorage.setItem('user', JSON.stringify({ ...data, password: '' }));
      message.success('Login Successful');
    } catch (error) {
      setLoading(false);
      message.error('Invalid Username or Password');
    }
  };

  return (
    <div className='centered-box'>
      {loading && <Spinner />}
      <div className='login-container'>
        <div className='image-container'>
          {/* Replace the placeholder image URL with the actual path or URL of your image */}
          <img src={ loginimg } alt="Placeholder" />
        </div>
        <div className='form-container'>
          <Form layout='vertical' onFinish={SubmitHandler}>
          <h1>STUDENT LOGIN</h1>
            <Form.Item label='Email' name='email' rules={[{ message: 'Please enter your email' }]}>
              <Input type='email' placeholder='Enter your email' />
            </Form.Item>
            <Form.Item label='Password' name='password' rules={[{ message: 'Please enter your password' }]}>
              <Input type='password' placeholder='Enter your password' />
            </Form.Item>
            <div className='button-container'>
              <Link to='/registration' style={{ color: 'darkgreen' }}>Not have an account? Click here to register</Link>
              <button className='btn btn-primary'>Login</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

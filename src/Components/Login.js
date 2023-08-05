import React from 'react'
import './Login.css';

const Login = () => {
    
  return (
    <div>
      <form >
        <div className='content'>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" naem="password" id="password"/>
  </div>
  <div className='button1'>
  <button type="submit" class="btn btn-primary">Login</button>
  </div>
  </div>
</form>
    </div>
  )
}

export default Login

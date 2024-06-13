import React, { useEffect } from 'react'
import { login } from '../utils/network-api';
import AuthContext from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [loginFailed, setLoginFailed] = React.useState<boolean>(false);
  const { token, setToken } = React.useContext(AuthContext);

  useEffect(() => {
    console.log("token", token);
    if (token) {
      window.location.href = '/profiles';
    }
  }, [token]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(email, password);

    if (response.meta.message === 'Login successful') {
      setLoginFailed(false);
      localStorage.setItem('token', response.data.access_token);

      console.log("response", response.data.access_token);
      
      await setToken(response.data.access_token);

      console.log("user", token);
      window.location.href = '/profiles';
    } else {
      setLoginFailed(true);
      localStorage.removeItem('token');
    }
  }

  return (
    <div className='login-page hold-transition'>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <span className="h1"><b>Admin</b>Panel</span>
          </div>
          <div className="card-body">
            
            { loginFailed && <p className='text-danger'>Invalid email or password</p> }

            <form method="post" onSubmit={(e) => handleSubmit(e)}>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" onChange={(e) => handleEmailChange(e)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => handlePasswordChange(e)}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react';

function Login() {
  type Page = 'login' | 'register';

  const [page, setPage] = useState<Page>('login');

  return (
    <div className="login-component">
      {page === 'login' && (
        <div>
          <h1>Login Page</h1>
          <form className="login-form form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
          <div className="switch-page">
            <p>Dont have an account?</p>
            <button onClick={() => setPage('register')}>Register here.</button>
          </div>
        </div>
      )}
      {page === 'register' && (
        <div>
          <h1>Register Page</h1>
          <form className="register-form form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Register</button>
          </form>
          <div className="switch-page">
            <p>Already have an account?</p>
            <button onClick={() => setPage('login')}>Login here.</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

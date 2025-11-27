import { useState } from 'react';

function Login() {
  type Page = 'login' | 'register';

  const [page, setPage] = useState<Page>('login');

  const [userNameRegister, setUserNameRegister] = useState<string>('');
  const [emailRegister, setEmailRegister] = useState<string>('');
  const [passwordRegister, setPasswordRegister] = useState<string>('');

  const [userNameLogin, setUserNameLogin] = useState<string>('');
  const [passwordLogin, setPasswordLogin] = useState<string>('');

  const [error, setError] = useState<string | null>(null);

  function Register(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    console.log(
      'Registered:',
      userNameRegister,
      emailRegister,
      passwordRegister
    );
    // Registration logic here
  }

  return (
    <div className="login-component">
      {page === 'login' && (
        <div>
          <h1>Login Page</h1>
          <form className="login-form form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userNameLogin}
              onChange={(e) => setUserNameLogin(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
              required
            />
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
            <input
              type="text"
              id="username"
              name="username"
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailRegister}
              onChange={(e) => setEmailRegister(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
              required
            />
            <button type="submit" onClick={Register}>
              Register
            </button>
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

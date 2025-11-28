import { useState } from 'react';

function Login() {
  type Page = 'login' | 'register';

  const [page, setPage] = useState<Page>('login');

  const [nameRegister, setNameRegister] = useState<string>('');
  const [userNameRegister, setUserNameRegister] = useState<string>('');
  const [emailRegister, setEmailRegister] = useState<string>('');
  const [passwordRegister, setPasswordRegister] = useState<string>('');

  const [userNameLogin, setUserNameLogin] = useState<string>('');
  const [passwordLogin, setPasswordLogin] = useState<string>('');

  const [error, setError] = useState<string | null>(null);

  async function Register(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/pets/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameRegister,
          username: userNameRegister,
          email: emailRegister,
          password: passwordRegister,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Registration successful:', data);
        setPage('login');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
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
            {error && <p className="error-message">{error}</p>}
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
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={nameRegister}
              onChange={(e) => setNameRegister(e.target.value)}
              required
            />
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="^[a-zA-Z0-9_-]{1,20}$"
              title="Username must be 1–20 characters and can only include letters, numbers, underscores (_), or hyphens (-)."
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
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
            {error && <p className="error-message">{error}</p>}
          </form>
          <div className="switch-page">
            <p>Already have an account?</p>
            <button
              onClick={() => {
                setPage('login');
                setError('');
              }}
            >
              Login here.
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

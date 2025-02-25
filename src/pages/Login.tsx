import api from '../utils/api';
import './Login.css';
import { useState } from 'react';

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const username = form.username.value;
    const password = form.password.value;

    try {
      const response = await api().post('/auth/login', { username, password });

      localStorage.setItem('token', response.data.access_token);
      window.location.href = '/'; // Redireciona após login
    } catch (err) {
      setError((err as Error)?.message || 'Erro ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Username"
          name='username'
          required
        />
        <input
          type="password"
          placeholder="Senha"
          name='password'
          required
        />
        <button type="submit">Entrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;

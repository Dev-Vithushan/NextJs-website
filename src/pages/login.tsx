import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // You can add logic here for form submission (e.g., API call)
  };

  return (
    
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', maxWidth: '300px', textAlign: 'left' }}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', marginTop: '12px' }}>Login</button>
      </form>
      <p>
        Don't have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;

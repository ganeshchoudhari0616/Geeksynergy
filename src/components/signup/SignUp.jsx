// components/signup/SignUp.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, password, email, phone, profession };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/login'); // This is the corrected line using useNavigate
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <select
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        >
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignUp;

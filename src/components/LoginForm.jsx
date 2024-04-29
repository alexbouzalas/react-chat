import { useState } from 'react';
import axios from 'axios';

const projectID = 'd5022113-0e5d-493e-80cb-edf7add19cf0';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // The getAuth() returns the Auth instance of the default Firebase Application

    const authObject = { 'Project-ID': "d5022113-0e5d-493e-80cb-edf7add19cf0", 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });


     //
      
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);


    //Error checking and input validation

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Wrong credentials. Please Try Again.');
    }
  };
  
    // Basic Form structure with Header 
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">JS Chat Project</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
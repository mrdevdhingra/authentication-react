import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate('/');
        } catch (err) {
          console.error('Error while signing out:', err);
        }
      };
      

  
    return (
      <div className='login-container'>
        <div className='login-form'>
        <h2>Home</h2>
        <p>Welcome {auth.currentUser.email}!</p>

        <button onClick={handleLogout}>Logout</button>
        </div>
        
      </div>
    );
  };
  
  export default Dashboard;
  
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../utils/User/GetUserData';
import { clearUserData } from '../utils/User/ClearUserData';
import { User } from '../utils/User/UserType';
import NavBar from './NavBar'; // Import the NavBar component

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(userData);
    } else {
      navigate('/login'); // Redirect to login if no user data is found
    }
  }, [navigate]);

  const handleLogout = () => {
    clearUserData();
    navigate('/login'); // Redirect to login after logging out
  };

  if (!user) {
    return (
      <h1 className="text-center mt-20 text-xl text-gray-300">
        Loading...
      </h1>
    );
  }

  return (
    <div className="h-screen">
      <NavBar />
    </div>
  );
};

export default Home;

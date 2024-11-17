import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import DefaultBanner from '../../assets/tala/default-banner.png';
>>>>>>> f6d6bce4d1d78d3a43491a153a8f1b5c71de9659
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Posts from '../Posts/Posts';
import api from '../../utils/api';
const ExternalProfile = ( ) => {
  const [error, setError] = useState(null);

  const { userId } = useParams(); 
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        console.log('Response:', response);
        setUser(response.data);
        console.log('Fetched user:', response.data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.response ? err.response.data : 'Internal Server Error');
      }
    };
  
    if (userId) {
      fetchUser();
    }
  }, [userId]);


  return (
    <div className="min-h-screen">
    <NavBar />
    <main className="flex justify-center w-full px-4">
      <div className="w-full sm:w-[280px] md:w-[480px] lg:w-[660px] xl:w-[900px] p-6 md:p-10 shadow-lg rounded-lg">
        <div className="flex flex-col items-center -mt-16">
          <img
            src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
            alt="user-avatar"
            className="w-32 h-32 mt-20 border-4 border-white rounded-full"
          />
          <h3 className="text-2xl font-bold text-gray-300 mt-4">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-sm text-gray-400 text-center">{user?.bio}</p>
          
          <div className="mt-4 flex gap-4">
            <button className="px-6 py-2 rounded-full bg-gray-700 text-white">
              Message
            </button>
          </div>
        </div>
      </div>
      </main>

        <div className="mt-8 w-full max-w-4xl">
        <Posts userId={user?._id}/>
        </div>

=======
import NavBar from '../NavBar';
import Posts from '../Posts/Posts';

const ExternalProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      handleReload(); 
    } else {
      setUser(userData);
    }
  }, []); 

  return (
    <div style={{ width: '100%' }} className="min-h-screen w-full">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        <div className="w-full flex mt-1 mx-0 px-0">
          <div className="w-full max-w-4xl p-10 shadow-lg">
            <section className="relative">
              <img
                src={DefaultBanner}
                alt="cover-image"
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="flex flex-col items-center -mt-16">
                <img
                  src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
                  alt="user-avatar"
                  className="w-32 h-32 border-4 border-white rounded-full"
                />
                <h3 className="text-2xl font-bold text-gray-300 mt-4">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-sm text-gray-400">{user?.bio}</p>
                <div className="mt-4 flex gap-4">
                  <button className="px-6 py-2 rounded-full bg-gray-700 text-white">
                    Message
                  </button>
                </div>
              </div>
            </section>
            <div className="mt-8">
              <Posts />
            </div>
          </div>
        </div>
      </main>
>>>>>>> f6d6bce4d1d78d3a43491a153a8f1b5c71de9659
    </div>
  );
};

export default ExternalProfile;

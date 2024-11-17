import React, { useState, useEffect } from 'react';
import DefaultBanner from '../../assets/tala/default-banner.png';
import AddPost from '../Posts/AddPost';
import { useNavigate } from 'react-router-dom';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
import NavBar from '../NavBar';
import Posts from '../Posts/Posts';
import api from '../../utils/api';
import { useLocation } from 'react-router-dom';

const ExternalProfile = (userId) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  
  useEffect(() => {
    if (user) {
      console.log('User accessed')
    } else {
      console.log('No user passed through state.');
    }
  }, [user]);
  const response =  api.get(`/post/user/${user.userId}/posts`);
      
     
    

  return (
    <div className="min-h-screen">
    <NavBar />
    <main className="flex justify-center w-full px-4">
      <div
        className="
          w-full 
          sm:w-[280px] 
          md:w-[480px] 
          lg:w-[660px] 
          xl:w-[900px]             
          p-6 
          md:p-10 
          shadow-lg 
          rounded-lg
        "
      >
              <div className="flex flex-col items-center -mt-16">
                <img
                  src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
                  alt="user-avatar"
                  className="w-32 h-32 mt-20 border-4 border-white rounded-full"
                />
               
                <h3 className="text-2xl font-bold text-gray-300 mt-4">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-sm text-gray-400">{user?.bio}</p>
                <div className="mt-4 flex gap-4">
                  <button className="px-6 py-2 rounded-full bg-gray-700 text-white">
                    Add friend
                  </button>
                  <button onClick={()=>{
                    handleReload('/edit-profile');
                  }}
                   className="px-6 py-2 rounded-full bg-gray-300 text-gray-700">
                    Message
                  </button>
                </div>
              </div>
        
            <div className="mt-8">
              <Posts />
            </div>
          </div>
      </main>
    </div>
  );
};

export default ExternalProfile;

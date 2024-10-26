import React, { useEffect, useState, ChangeEvent } from 'react';
import DefaultBanner from '../../assets/tala/default-banner.png';
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';
import NavBar from '../NavBar';

const EditProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      handleReload();
    } else {
      setUser(userData);
      setFirstName(userData.firstName || '');
      setLastName(userData.lastName || '');
      setBio(userData.bio || '');
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName') setFirstName(value);
    if (name === 'lastName') setLastName(value);
    if (name === 'bio') setBio(value);
  };

  const handleSaveChanges = () => {
    const updatedUser = { ...user, firstName, lastName, bio };
    console.log('Updated User:', updatedUser);
    handleReload('/profile');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <NavBar />
      <main className="w-full max-w-2xl mt-10">
        <section className="relative  shadow-md rounded-xl overflow-hidden">
          <img
            src={DefaultBanner}
            alt="cover-image"
            className="w-full h-44 object-cover"
          />
          <div className="flex flex-col items-center -mt-16">
            <img
              src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
              alt="user-avatar"
              className="w-32 h-32 border-4 border-gray-300 rounded-full object-cover"
            />
            <div className="mt-4 w-full px-6">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full mt-4 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full mt-4 border bg-transparent border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <textarea
                name="bio"
                value={bio}
                onChange={handleInputChange}
                placeholder="Write a short bio..."
                rows={3}
                className="w-full mt-4 bg-transparent border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="mt-6 w-full px-6">
              <button
                onClick={handleSaveChanges}
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditProfile;

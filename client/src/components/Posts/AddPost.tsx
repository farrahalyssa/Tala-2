import React, { useState, useEffect, useRef } from 'react';
import { FaImage } from 'react-icons/fa'; 
import { User } from '../../utils/User/UserType';
import { getUserData } from '../../utils/User/GetUserData';
import { handleReload } from '../../utils/HandleReload';

const AddPost = () => {
  const [user, setUser] = useState<User | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize function
  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height based on content
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      handleReload(); 
    } else {
      setUser(userData); 
    }
  }, [user]);

  return (
    <div className="mt-10">
      <div className="flex flex-col space-y-2">
        {/* <div className="flex items-center space-x-2">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
            alt="user-avatar"
          />
          <p className="font-semibold text-gray-300">
            {user?.firstName} {user?.lastName}
          </p> 
         </div> */}

        <div className="relative w-full mt-2">
          <textarea
            ref={textareaRef}
            className="p-3 w-full mt-1 bg-white bg-opacity-10 pr-20 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 resize-none overflow-hidden text-white placeholder-gray-400"
            rows={3}
            placeholder={`What's on your mind, ${user?.firstName}?`}
            onInput={autoResize} // Call autoResize on input
          />

          {/* Post and Image Buttons */}
          <div className="absolute bottom-4 right-2 flex space-x-2">
            <button className="p-2 rounded-full bg-gray-300 text-gray-700 hover:bg-gray-400">
              <FaImage size={18} />
            </button>
            <button className="px-4 py-1 rounded-full bg-gray-700 text-white hover:bg-gray-800">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

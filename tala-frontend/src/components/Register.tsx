import React from 'react';
import TalaLogo from '../assets/tala/tala-darkbg.png';


const Register = () => {
  return (
    <div className='Login'>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src={TalaLogo} alt="Tala" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-500 text-left">Name</label>
              <div className="mt-2">
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-500 text-left">Username</label>
              <div className="mt-2">
                <input 
                  id="username" 
                  name="username" 
                  type="text" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500 text-left">Email address</label>
              <div className="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-500 text-left">Password</label>
              <div className="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="retype-password" className="block text-sm font-medium leading-6 text-gray-500 text-left">Retype Password</label>
              <div className="mt-2">
                <input 
                  id="retype-password" 
                  name="retype-password" 
                  type="password" 
                  required 
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6" 
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="flex w-full justify-center rounded-md bg-gray-700 bg-opacity-50 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-100 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                Register 
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already part of the community?
          <a href="" className="font-semibold leading-6 text-gray-400 hover:text-gray-300"> Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HomeIcon, ChatBubbleLeftIcon, UserPlusIcon, BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TalaLogo from '../assets/tala/tala-darkbg.png'; 
import { clearUserData } from '../utils/User/ClearUserData';
import { getUserData } from '../utils/User/GetUserData';
import { useNavigate, Link } from 'react-router-dom';
import { User } from '../utils/User/UserType';
import { handleReload } from '../utils/HandleReload';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Messages', href: '/messages', icon: ChatBubbleLeftIcon },
  { name: 'Requests', href: '/requests', icon: UserPlusIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const userData = getUserData();
  if (!userData) {
    handleReload();
  } else if (!user) {
    setUser(userData);
  }

  const handleLogout = () => {
    clearUserData();
    navigate('/login');
  };

  if (!user) {
    return (
      <h1 className="text-center mt-20 text-xl text-gray-300">
        Loading...
      </h1>
    );
  }

  return (
    <Disclosure as="nav" className="w-full fixed top-0 left-0 z-10 bg-[#0d0d0d]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={TalaLogo} alt="Tala" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          window.location.pathname === item.href
                            ? 'bg-custom-highlight text-white'
                            : 'text-gray-300 hover:bg-custom-highlight hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium flex items-center'
                        )}
                      >
                        <item.icon className="h-6 w-6 mr-2" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-700 bg-opacity-50 p-1 text-gray-400 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="relative">
                  <div>
                    <Menu.Button style={{ background: 'transparent' }}>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.pinimg.com/564x/6b/1e/58/6b1e58e2f70b14528111ee7c1dd0f855.jpg"
                        alt="user-avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              handleReload('/profile');
                            }}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-800' : '',
                              'block px-4 py-2 text-sm text-gray-700 hover:text-grey-500'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-800' : '',
                              'block px-4 py-2 text-sm text-gray-700 hover:text-grey-500'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={handleLogout}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-800' : '',
                              'block px-4 py-2 text-sm text-gray-700 hover:text-grey-500'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    window.location.pathname === item.href
                      ? 'bg-custom-highlight text-white'
                      : 'text-gray-300 hover:bg-custom-highlight hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  <item.icon className="h-6 w-6 mr-2" aria-hidden="true" />
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

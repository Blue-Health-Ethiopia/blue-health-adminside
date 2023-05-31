import React, { useState } from 'react';
import { HiBell } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NotificationButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setHasNewNotification(false); // Mark notifications as read when opening the dropdown
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={handleToggleDropdown}
      >
        <HiBell
          className={`w-6 text-white hover:text-secondary mr-4 h-6 ${
            hasNewNotification ? 'text-red-500' : ''
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {/* Dropdown content */}
          <Link
            to="/dash/register"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            CPD Notifications
          </Link>
          <Link
            to="/dash/register"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            First Aid Notifications
          </Link>
        </div>
      )}
    </div>
  );
};

export default NotificationButton;

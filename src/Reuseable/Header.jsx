import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import NotificationButton from './NotificationButton';

const Header = ({ pageName, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="flex w-screen  items-center px-5 py-4 pr-80 bg-primary">
      <div>
        {' '}
        <h1 className="text-3xl text-white font-medium">{pageName}</h1>
      </div>

      <form
        onSubmit={handleSearch}
        className="flex justify-end ml-auto top-10 items-center"
      >
        
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-md p-1 text-black w-72 focus:outline-none "
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-secondary text-white rounded-r-md p-2 ml-1 hover:bg-primary focus:outline-none"
        >
          <FiSearch className="text-xl" />
        </button>
      </form>
    </div>
  );
};

export default Header;

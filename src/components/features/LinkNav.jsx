import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = () => {
  const links = [
    {
      id:1,
      link: '/virtualseminar',
      name: 'Virtual Seminary',
    },
    {
      id:2,
      link: '/virtualseminar/create',
      name: 'Create virtual seminar',
    },
  ];
  return (
    <>
      <div className="flex gap-2 items-center duration-200">
        {links.map((link) => (
          <>
            <Link
              key={link.id}
              className="text-primaryMedium text-sm hover:text-primary"
              to={link.link}
            >
              {link.name}
            </Link>
            |
          </>
        ))}
      </div>
    </>
  );
};

export default LinkNav;

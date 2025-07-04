import React from 'react';

const Nav = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Terms', href: '/terms' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Logout', href: '/logout' },
  ];

  return (
    <nav className="w-full bg-[#26354d] bg-opacity-95 backdrop-blur-md py-4 px-8 flex justify-between items-center shadow-md text-white">
      <h1 className="text-3xl font-extrabold tracking-widest uppercase">JobSeeker</h1>

      {/* Nav Links */}
      <ul className="flex space-x-8 font-semibold tracking-wide text-white uppercase">
        {navLinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

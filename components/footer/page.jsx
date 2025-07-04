import React from 'react';
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Terms', href: '/terms' },
  ];
const page = () => {
  return (
    <div className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">JobSeeker</h2>
          <p className="mt-2 text-gray-300">
            Description of any product or motto of the company.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-red-600 inline-block pb-1">
            Services
          </h3>
          <ul className="mt-3 space-y-1 text-gray-200">
            {["Digital Marketing", "Content Creation", "Logo Designing", "Web Development", "Graphic Designing"].map((service, idx) => (
              <li
                key={idx}
                className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Quick Links */}
         <div>
          <h3 className="text-xl font-semibold border-b-2 border-red-600 inline-block pb-1">
            Services
          </h3>
          <ul className="mt-3 space-y-1 text-gray-200">
            {navLinks.map((item, idx) => (
               <li key={idx}>
              <a
              href={item.href}
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold border-b-2 border-red-600 inline-block pb-1">
            Contact us
          </h3>
          <p className="mt-3 text-gray-200 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            support@JobSeeker.com
          </p>
        </div>

      </div>
    </div>
  );
};

export default page;


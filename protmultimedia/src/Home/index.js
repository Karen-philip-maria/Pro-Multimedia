import './index.css'
import React, { useState,useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
    } else {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [isOpen]);

  
  return (
    <div className="navbar">
      <div className='nav'>
      <div className='items'>
<li><a href="text">Home</a></li>
<li><a href="text">Podcasts</a></li>
<li><a href="text">Videos</a></li>
<li><a href="text">Blogs</a></li>
<li><a href="text">About Us</a></li>
      </div>
      </div>
<div className='hamburger'>
        <HamburgerIcon toggled={isOpen} size={20} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={30} />
            </div>
            <li><a href="tetxs">Home</a></li>
            <li><a href="texts">Podcasts</a></li>
            <li><a href="texts">Videos</a></li>
            <li><a href="texts">Blogs</a></li>
            <li><a href="texts">About Us</a></li>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;


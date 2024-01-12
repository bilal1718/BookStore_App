// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './hero';
import Nav from './nav';

const Header = () => {
  return (
    <>
   <Nav />
   <Hero />
  </>
  );
};

export default Header;

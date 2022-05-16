import React from 'react';
import Link from 'next/link'
import BigLogo from '../utils/BigLogo';
import Logo from '../utils/Logo';
import NavbarItems from '../navigation/Navbar/NavbarItems';
import Drawer from '../navigation/Drawer';

const categories=[]

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50 max-w-[1320px] px-4 md:px-8 w-full mx-auto">
    <div className="flex items-center h-[10vh] justify-between ">
      <Link href="/">
        <a className="hidden sm:block">
          <BigLogo />
        </a>
      </Link>

      <Link href="/">
        <a className="block sm:hidden">
          <Logo size="50" />
        </a>
      </Link>
    
      <NavbarItems />
    </div>
    
    <div className="lg:mr-8 ml-auto lg:hidden flex items-center pb-4">
      <Drawer categories={categories} />
     
    </div>
  
  </div>
  );
}

export default Header;

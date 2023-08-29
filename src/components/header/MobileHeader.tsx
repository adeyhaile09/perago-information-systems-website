import { Card } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-slate-500 transition ease transform duration-300`;

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '48px',
        zIndex: 100,
        backgroundColor: '#fff',
      }}
    >
      <nav>
        <div className="shadow-2xl flex items-center justify-between">
          <div>
            <Image
              src="/images/perago2.png"
              alt=""
              width={100}
              height={50}
              className="mt-2"
            />
          </div>
          <nav className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex flex-col h-12 w-12 p-2 justify-center items-center group rounded-md text-gray-800 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {/* <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg> */}
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button>
            {/* <button
              className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button> */}
          </nav>
        </div>
        {isOpen && (
          <Card shadow="md" w={'50%'} className="md:hidden  leading-10">
            <ul className="flex flex-col space-y-2 ml-20 ">
              <li onClick={toggleMenu}>
                <Link href="/" className="hover:bg-[#55ba4a]">
                  <div className="text-[#575a5c] ">Home</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/projects">
                  <div className="text-[#575a5c]">Projects</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/services">
                  <div className="text-[#575a5c]">Services</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/about">
                  <div className="text-[#575a5c]">About</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/career">
                  <div className="text-[#575a5c]">Career</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/blogs">
                  <div className="text-[#575a5c]">Blogs</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/intership">
                  <div className="text-[#575a5c]">Internship</div>
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/contact-us">
                  <div className="text-[#575a5c]">Contact</div>
                </Link>
              </li>
            </ul>
          </Card>
        )}
      </nav>
    </header>
  );
};

export default MobileHeader;

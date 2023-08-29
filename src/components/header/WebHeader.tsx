import React, { useState } from 'react';

import { Box, Button, Card, Flex, Group, List } from '@mantine/core';
import Link from 'next/link';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Dropdown from './Dropdown';

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  // {
  //   title: 'Home',
  //   route: '/',
  // },
  {
    title: 'Projects',
    route: '/projects',
  },
  {
    title: 'Services',
    route: '/services',
    // children: [
    //   {
    //     title: 'eServices',
    //     route: '/servicess/eServices',
    //   },
    //   {
    //     title: 'eProcure',
    //     route: '/servicess/eProcure',
    //   },
    //   {
    //     title: 'Engage',
    //     route: '/servicess/engage',
    //   },
    //   {
    //     title: 'Measure',
    //     route: '/servicess/measure',
    //   },
    // ],
  },
  {
    title: 'About',
    route: '/about',
  },
  {
    title: 'Career',
    route: '/career',
  },
  {
    title: 'Blogs',
    route: '/blogs',
  },
  {
    title: 'Internship',
    route: '/intership',
  },
];

const WebHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: '#fff',
      }}
    >
      <Box p={18} className="shadow text-sm">
        <Flex>
          <Group>
            <Link href="/">
              <Image
                src="/images/perago2.png"
                alt=""
                style={{ marginRight: '40em', marginLeft: '35px' }}
                width={140}
                height={30}
              />
            </Link>
          </Group>
          <div
            className={`md:grid md:grid-cols-7 text-[#575a5c]  text-center gap-8 `}
          >
            {menuItems.map((item) => {
              return item.hasOwnProperty('children') ? (
                <Dropdown item={item} />
              ) : (
                <Link className="hover:text-[#55ba4a]" href={item?.route || ''}>
                  {item.title}
                </Link>
              );
            })}
          </div>
          {/* <Grid
            className={`md:grid md:grid-cols-7 text-[#575a5c]  text-center gap-8 `}
          >
            <Link href={'/projects'} className={` hover:text-[#55ba4a]`}>
              Projects
            </Link>

            <div className="flex gap-8 items-center text-white">
              {menuItems.map((item) => {
                return item.hasOwnProperty('children') ? (
                  <Dropdown item={item} />
                ) : (
                  <Link
                    className="hover:text-blue-500"
                    href={item?.route || ''}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <Link href={'/about'} className={` hover:text-[#55ba4a]`}>
              About
            </Link>
            <Link href={'/career'} className={` hover:text-[#55ba4a]`}>
              Career
            </Link>
            <Link href={'/blogs'} className={` hover:text-[#55ba4a]`}>
              Blogs
            </Link>
            <Link href={'/intership'} className={` hover:text-[#55ba4a]`}>
              Internship
            </Link>
          </Grid>
          <Link
            href={'/contact-us'}
            className={` hover:text-[#55ba4a]  text-sm`}
          >
            <Button
              style={{ marginTop: '-6px' }}
              className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] "
            >
              Contact Us
            </Button>
          </Link> */}
          <Link
            href={'/contact-us'}
            className={` hover:text-[#55ba4a]  text-sm`}
          >
            <Button
              style={{ marginTop: '-6px' }}
              className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] "
            >
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Box>
    </header>
  );
};

export default WebHeader;

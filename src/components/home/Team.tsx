import React from 'react';
import { Card, Image, Text, Box, Group, Flex, Button } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Team = () => {
  return (
    <>
      <Grid
        item
        xs={4}
        className="md:grid md:grid-cols-2 gap-20 mt-14  lg:pl-40 lg:pr-40 pl-10 pr-10"
      >
        <Box>
          <Box className=" ">
            <Card.Section className="text-center text-5xl text-[#55ba4a] mb-5">
              MEET THE TEAM
            </Card.Section>
            <Text size="sm" color="dimmed" className=" text-justify">
              Perago Information Systems PLC is a software and information
              technology company in Addis Ababa, Ethiopia serving clients
              nationwide and worldwide. We are extremely committed to delivering
              quality advice, sales and support to assist our clients to achieve
              the maximum from their investment. and also developing and
              implementing electronic government and B2B commerce solutions
              towards the provision of various online transactional services.
              Perago provides strong technical support and knowledge transfer to
              sustain the competitive advantages gained by customers from their
              ICT investments.
            </Text>
            <Image
              src="/images/team2.jpg"
              // width={550}
              height={200}
              alt=""
              className="mt-14 mb-10 lg:w-20 w-80"
            />
            <Text size="sm" color="dimmed" className=" text-justify">
              Perago Information Systems PLC was started because we want to
              contribute our own share by providing opportunities to talented
              developers and work on projects that actually can bring a
              significant change in Ethiopia’s IT sector, digitalizing
              government services or private sector services and many more. We
              want to create an environment where everyone learns from each
              other and grow together by creating an open and transparent
              culture in our office.
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className="  text-justify mt-5 mb-20"
            >
              Started as a group of passionate software developers, and now we
              are booming with our mission to create a “digital well-being” that
              the public can enjoy, in a sense that talented programmers and
              tech enthusiasts have the ability to show their powers and talents
              by working on big scaled and challenging projects, while also
              learning to grow together.
            </Text>
          </Box>
          <Link
            href={'/contact-us'}
            className={` hover:text-[#55ba4a]  text-sm `}
          >
            <Button className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] mb-10  pl-10 pr-10 ml-36">
              Join Us
            </Button>
          </Link>
        </Box>
        <Box>
          <Image
            src="/images/team2.jpg"
            height={400}
            alt=""
            className="lg:max-h-[470px] mt-14 mb-20 lg:w-20 w-80"
          />
        </Box>
      </Grid>
    </>
  );
};

export default Team;

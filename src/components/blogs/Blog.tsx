import React from 'react';
import { Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { Grid } from '@mui/material';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';

const Blog = () => {
  return (
    <Box className="mt-28 lg:pl-44 lg:pr-56 pl-10 pr-10">
      <Text className=" text-2xl text-[#55ba4a] mb-5 text-center">
        THE BEST TECH BLOG IN ETHIOPIA
      </Text>
      <Text color="dimmed" className="text-sm text-justify leading-7">
        Our list is designed in an easily digestible format, with each entry
        containing a short description of the blog and a link to the
        website.meanwhile The blogs are sorted alphabetically, making it easy to
        find what you are looking for. Whether you are looking for the latest
        news on new technology or want to learn more about a particular topic,
        this list has something for everyone. With so many great options to
        choose from, you are sure to find a blog that will help you stay
        up-to-date on all the latest developments in the world of technology.
        explore and find everything in one place. We are constantly updating
        this list with new blogs to ensure that you aregetting the most
        up-to-date information. Whether you are a beginner or an expert, there
        is something for everyone. From coding to VR, there is no shortage of
        things to discover and talk about. If you are looking for a particular
        topic, you can search this list or click one of the recommended
        interests below. We hope you enjoy this list and find it helpful as you
        navigate the ever-changing and expanding world of technology. We welcome
        your feedback, so if you have a blog idea that you feel should be
        included in this list, let us know! Thanks for reading!
      </Text>
      <Grid item xs={4} className="md:grid md:grid-cols-3 gap-10 mt-10 pb-28  ">
        <Box className="cursor-pointer group">
          <Card
            shadow="sm"
            radius="md"
            withBorder
            className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg mb-10"
          >
            <Group position="center" className="rounded ">
              <Image src="/images/blog1.jpg" height={200} width={400} alt="" />
            </Group>

            <Group mt="md" mb="xs" className="text-[#868e96]">
              <Text className="text-xl font-bold   ">eServices</Text>
              <Group className="flex justify-between text-sm">
                <Text>Dec 15, 2022</Text>
                <Text> Perago Information Systems</Text>
              </Group>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5">
              A solution framework to apply process management in e-government
              with the capabilities of two-way interaction between government
              and citizens.
            </Text>
            <Link className="text-[#55ba4a] mt-20 text-xs " href={'./'}>
              Read Post
              <EastIcon className="ml-2  text-sm " />
            </Link>
          </Card>
        </Box>
        <Box className="cursor-pointer group">
          <Card
            shadow="sm"
            radius="md"
            withBorder
            className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
          >
            <Group position="center" className="rounded ">
              <Image src="/images/blog1.jpg" height={200} width={400} alt="" />
            </Group>

            <Group mt="md" mb="xs" className="text-[#868e96]">
              <Text className="text-xl font-bold   ">eProcure</Text>
              <Group className="flex justify-between text-sm">
                <Text>Dec 15, 2022</Text>
                <Text> Perago Information Systems</Text>
              </Group>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5">
              A solution framework to apply process management in e-government
              with the capabilities of two-way interaction between government
              and citizens.
            </Text>
            <Link className="text-[#55ba4a] mt-20 text-xs " href={'./'}>
              Read Post
              <EastIcon className="ml-2  text-sm " />
            </Link>
          </Card>
        </Box>
        <Box className="cursor-pointer group">
          <Card
            shadow="sm"
            radius="md"
            withBorder
            className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100"
          >
            <Group position="center" className="rounded ">
              <Image src="/images/blog1.jpg" height={200} width={400} alt="" />
            </Group>

            <Group mt="md" mb="xs" className="text-[#868e96]">
              <Text className="text-xl font-bold   ">eServices</Text>
              <Group className="flex justify-between text-sm">
                <Text>Dec 15, 2022</Text>
                <Text> Perago Information Systems</Text>
              </Group>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5">
              A solution framework to apply process management in e-government
              with the capabilities of two-way interaction between government
              and citizens.
            </Text>
            <Link className="text-[#55ba4a] mt-20 text-xs " href={'./'}>
              Read Post
              <EastIcon className="ml-2  text-sm " />
            </Link>
          </Card>
        </Box>
      </Grid>
    </Box>
  );
};

export default Blog;

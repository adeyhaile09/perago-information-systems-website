import { Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

const Blog = () => {
  return (
    <Box className="bg-[#F5F5F5] pt-20 lg:pl-40 lg:pr-40 pl-10 pr-10">
      <Text className=" text-5xl text-[#55ba4a] mb-5 text-center">BLOG</Text>
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

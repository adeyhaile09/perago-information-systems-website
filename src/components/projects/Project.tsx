import React from 'react';
import { Box, Button, Card, Group, Image, Text } from '@mantine/core';
import { Grid } from '@mui/material';
import Link from 'next/link';
import EastIcon from '@mui/icons-material/East';

const Project = () => {
  return (
    <Box className="mt-28 lg:pl-40 lg:pr-40 p-10">
      <Text className=" text-2xl text-[#55ba4a] mb-5 text-center">
        SOME OF OUR WORKS
      </Text>
      <Text color="dimmed" className="text-sm text-justify leading-7">
        We are a group of young experts that are eager to provide excellent
        products to Ethiopian and European businesses. to point out we have
        expertise in a variety of fields, including ed tech, e-commerce,
        affiliate marketing, and SEO-driven development. our Software Products
        Portfolio is consist of a number of projects using cutting-edge
        technology. Our team consists of 25 engineers that collaborate to build
        high-quality products.
      </Text>

      <Grid
        item
        xs={3}
        className="md:grid md:grid-cols-3 gap-10 mt-10  text-[#868e96] "
      >
        <Box className="cursor-pointer group ">
          <Card
            shadow="sm"
            radius="md"
            withBorder
            className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
          >
            <Group position="center" className="rounded ">
              <Image
                src="/images/project2.jpg"
                height={200}
                width={400}
                alt=""
              />
            </Group>

            <Group className="flex justify-between mt-5 mb-5">
              <Text className="text-xl font-bold  text-[#868e96] ">
                eProcure
              </Text>

              <Link className="text-[#55ba4a] text-sm " href={'./'}>
                Visit Site
              </Link>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5 ">
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
              <Image
                src="/images/project3.jpg"
                height={200}
                width={400}
                alt=""
              />
            </Group>

            <Group className="flex justify-between mt-5 mb-5">
              <Text className="text-xl font-bold  text-[#868e96] ">
                eServices
              </Text>

              <Link className="text-[#55ba4a] text-sm" href={'./'}>
                Visit Site
              </Link>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5 ">
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
              <Image
                src="/images/project2.jpg"
                height={200}
                width={400}
                alt=""
              />
            </Group>

            <Group className="flex justify-between mt-5 mb-5">
              <Text className="text-xl font-bold  text-[#868e96] ">
                eProcure
              </Text>

              <Link className="text-[#55ba4a] text-sm" href={'./'}>
                Visit Site
              </Link>
            </Group>

            <Text size="xs" color="dimmed" className="mb-5 ">
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

export default Project;

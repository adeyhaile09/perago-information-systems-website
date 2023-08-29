import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, Image, Text, Badge, Group, Box, Button } from '@mantine/core';
import Link from 'next/link';

const OurValues = () => {
  return (
    <>
      <Box className="bg-[#F5F5F5] pt-20   lg:pl-40 lg:pr-40 pl-10 pr-10 mt-20">
        <Text className=" text-5xl text-[#55ba4a] mb-5 text-center">OUR</Text>
        <Text color="dimmed" className="text-sm  text-justify">
          At Perago Information Systems, our workflow inhibits transparency in
          its core. We deeply value the relation we form with our clients and
          believe that clear communication, in every stage of the development
          process, is key for a successful partnership. Hence making sure that
          the output of our work is aligned with the desired solution.
        </Text>

        <Grid
          item
          xs={4}
          className="md:grid md:grid-cols-3 gap-10 mt-10 pb-28 text-[#868e96]  "
        >
          <Box className="cursor-pointer group mb-10">
            <Group
              position="center"
              className="transition duration-700  ease-in-out transform group-hover:scale-105 "
            >
              <Card
                shadow="md"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/integrity1.png"
                  height={100}
                  width={100}
                  alt=""
                  className="mt-8 ml-8 "
                />
              </Card>
            </Group>

            <Group position="center" mt="xl" mb="xs" className="text-center">
              <Text className="font-bold">Integrity</Text>
            </Group>
            <Text size="xs" className="text-center  pl-5 pr-5">
              We are consistent, honest, and fair and always try to do what is
              right.
            </Text>
          </Box>
          <Box className="cursor-pointer group mb-10">
            <Group
              position="center"
              className="transition duration-700  ease-in-out transform group-hover:scale-105 "
            >
              <Card
                shadow="md"
                padding="lg"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/quality2.jpg"
                  height={100}
                  width={100}
                  alt=""
                  className="mt-7 ml-7 "
                />
              </Card>
            </Group>

            <Group position="center" mt="md" mb="xs" className=" text-center">
              <Text className="font-bold">Quality</Text>
              <Text size="xs" className="text-center  pl-5 pr-5">
                We deliver high-quality software that meets or exceeds customer
                expectations and industry standards.
              </Text>
            </Group>
          </Box>
          <Box className="cursor-pointer group">
            <Group
              position="center"
              className="transition duration-700  ease-in-out transform group-hover:scale-105 "
            >
              <Card
                shadow="md"
                padding="lg"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/inovation.jpg"
                  height={80}
                  width={80}
                  alt=""
                  className="mt-8 ml-9 "
                />
              </Card>
            </Group>

            <Group position="center" mt="md" mb="xs" className=" text-center">
              <Text className="font-bold">Innovation</Text>
              <Text size="xs" className=" text-center  pl-5 pr-5">
                We commit to seeking new solutions, and continuously improving
                products and services.
              </Text>
            </Group>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default OurValues;

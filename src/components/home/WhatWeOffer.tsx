import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, Image, Text, Group, Box } from '@mantine/core';
import Link from 'next/link';

const WhatWeOffer = () => {
  return (
    <Card className="bg-[#F5F5F5] pt-20  lg:pl-40 lg:pr-40 pl-10 pr-10 ">
      <Card.Section className=" text-5xl text-[#55ba4a] mb-5 text-center">
        OUR SERVICES
      </Card.Section>
      <Text color="dimmed" className="text-sm text-justify">
        We help our clients to build state of the art software products and
        empower the tech sector with innovative solutions and approaches. The
        services we give are in parallel with the best practices set by the
        global community, including tech giants. We make sure our team is up-to
        date with the technologies used, and therefore delivering the best
        possible solution to the problem on hand.
      </Text>

      <Grid
        item
        xs={4}
        className="md:grid md:grid-cols-3 gap-10 mt-10 pb-12 text-[#868e96] "
      >
        <Box className=" cursor-pointer group mb-10">
          <Group
            position="center"
            className="transition duration-700  ease-in-out transform group-hover:scale-105  "
          >
            <Link href={'./servicess/eServices'}>
              <Card
                shadow="md"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/perago Icons-02.png"
                  height={90}
                  width={90}
                  alt=""
                  className="mt-8 ml-8"
                />
              </Card>
            </Link>
          </Group>

          <Group position="center" mt="xl" mb="xs" className=" text-center ">
            <Text className="font-bold">E-Services Platform</Text>
          </Group>
          <Text size="xs" className="text-center pl-5 pr-5">
            A business process management solution enabling client&apos;s to
            achieve paperless business transformation.
          </Text>
        </Box>
        <Box className="cursor-pointer group mb-10">
          <Group
            position="center"
            className="transition duration-700  ease-in-out transform group-hover:scale-105 "
          >
            <Link href={'./servicess/eProcure'}>
              <Card
                shadow="md"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/perago Icons-01.png"
                  height={90}
                  width={90}
                  alt=""
                  className="mt-8 ml-8"
                />
              </Card>
            </Link>
          </Group>

          <Group position="center" mt="md" mb="xs" className=" text-center">
            <Text className="font-bold">E-Procurement Platform</Text>
            <Text size="xs" className=" text-center  pl-5 pr-5">
              Better Planning, just-In-Time-Requisitions, competitive Bidding
              and Effective contract Management
            </Text>
          </Group>
        </Box>
        <Box className="cursor-pointer group mb-10">
          <Group
            position="center"
            className="transition duration-700  ease-in-out transform group-hover:scale-105 "
          >
            <Link href={'./servicess/engage'}>
              <Card
                shadow="md"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/perago Icons-03.png"
                  height={90}
                  width={90}
                  alt=""
                  className="mt-8 ml-8"
                />
              </Card>
            </Link>
          </Group>

          <Group position="center" mt="md" mb="xs" className=" text-center">
            <Text className="font-bold">Customer Engagement Services</Text>
            <Text size="xs" className=" text-center  pl-5 pr-5">
              A powerful and easy-to-use web-based customer services and
              complaint redressal system
            </Text>
          </Group>
        </Box>

        <Box className="cursor-pointer group mb-10">
          <Group
            position="center"
            className="transition duration-700  ease-in-out transform group-hover:scale-105 "
          >
            <Link href={'./servicess/measure'}>
              <Card
                shadow="md"
                withBorder
                className="rounded-full h-48 w-48  group-hover:shadow-lg"
              >
                <Image
                  src="/images/perago Icons-04.png"
                  height={90}
                  width={90}
                  alt=""
                  className="mt-8 ml-8"
                />
              </Card>
            </Link>
          </Group>

          <Group position="center" mt="md" mb="xs" className=" text-center">
            <Text className="font-bold">Performance Management</Text>
            <Text size="xs" className=" text-center  pl-5 pr-5">
              Managing your Key Performance Indicators to better business
              results.
            </Text>
          </Group>
        </Box>
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
                src="/images/perago Icons-05.png"
                height={90}
                width={90}
                alt=""
                className="mt-8 ml-8"
              />
            </Card>
          </Group>

          <Group position="center" mt="md" mb="xs" className=" text-center">
            <Text className="font-bold">Data Management Services</Text>
            <Text size="xs" className=" text-center  pl-5 pr-5">
              Maximize the decision-making power of your data assets
            </Text>
          </Group>
        </Box>
        <Box className="cursor-pointer group ">
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
                src="/images/perago Icons-06.png"
                height={90}
                width={90}
                alt=""
                className="mt-8 ml-8"
              />
            </Card>
          </Group>

          <Group position="center" mt="md" mb="xs" className=" text-center">
            <Text className="font-bold">Online Payments</Text>
            <Text size="xs" className="text-center  pl-5 pr-5">
              It helps customers pay for government service fees, utilities, and
              retail purchases seamlessly.
            </Text>
          </Group>
        </Box>
      </Grid>
      {/* <Grid
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
      </Grid> */}
    </Card>
  );
};

export default WhatWeOffer;

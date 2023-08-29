import React from 'react';
import { Card, Image, Text, Box, Group, Button } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <Card className="mt-28 lg:pl-20 lg:pr-20 p-10 text-left ">
        <Text className="text-center text-5xl text-[#868e96]">Services</Text>
        <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5"></Card.Section>
        <Grid item xs={4} className="md:grid md:grid-cols-3 gap-20 mt-10">
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-02.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a]"
              >
                <Text weight={500} className="text-2xl ">
                  eSERVICES
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center mb-3">
                A solution framework to apply process management in e-government
                with the capabilities of two-way interaction between government
                and citizens.
              </Text>
              <Link href={'./servicess/eServices'}>
                <Button className="hover:bg-[#55ba4a] hover:text-[#fff] border-[#55ba4a] text-[#575a5c] mt-8 mx-auto md:ml-28 md:mt-0 block">
                  Read more
                </Button>
              </Link>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-01.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-2xl ">
                  ePROCURE
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center mb-4">
                Collaborative platform in conducting key procurement activities
                in acquisition of goods, works, and services with enhanced
                efficiency in procurement management
              </Text>
              <Link href={'./servicess/eProcure'}>
                <Button className="hover:bg-[#55ba4a] hover:text-[#fff] border-[#55ba4a] text-[#575a5c] mt-8 mx-auto md:ml-28 md:mt-0 block">
                  Read more
                </Button>
              </Link>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-03.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-2xl ">
                  ENGAGE
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center mb-2">
                A communication platform between customers and a service
                provider through various electronic channels of correspondence
                to enhance overall customer experiences and delight
              </Text>
              <Link href={'./servicess/engage'}>
                <Button className="hover:bg-[#55ba4a] hover:text-[#fff] border-[#55ba4a] text-[#575a5c] mt-10 mx-auto md:ml-28 md:mt-0 block">
                  Read more
                </Button>
              </Link>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-04.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-2xl">
                  MEASURE
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center mb-3">
                A web-based collaboration and productivity platform to design,
                plan, execute, measure and manage organizational strategy by
                linking a vision and mission to strategic priorities,
                objectives, measures, and initiatives
              </Text>
              <Link href={'./servicess/measure'}>
                <Button className="hover:bg-[#55ba4a] hover:text-[#fff] border-[#55ba4a] text-[#575a5c] mt-8 mx-auto md:ml-28 md:mt-0 block">
                  Read more
                </Button>
              </Link>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10"
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-05.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-2xl">
                  DATA MANAGER
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                The Data Management Platform consists of an enterprise data hub,
                system for data inflow and outflow, databases, data marts and
                data warehouse as well as technology for data management,
                transformation and presentation to meet the present and
                potential business data needs of organizations.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              radius="md"
              withBorder
              style={{ height: '23rem' }}
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 "
            >
              <Group position="center">
                <Image
                  src="/images/perago Icons-06.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </Group>

              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a]"
              >
                <Text weight={500} className="text-2xl">
                  ePAY
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center ">
                The Online Payment Platform helps customers pay for government
                service fees, utilities, and retail purchases seamlessly by
                integrating it with our e-services and e-commerce platforms. The
                platform helps to generate payment orders to track payments and
                e-receipts as proof of payments.
              </Text>
            </Card>
          </Box>
        </Grid>
      </Card>
    </>
  );
};

export default Services;

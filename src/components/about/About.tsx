import React from 'react';
import { Card, Text, Group, Box } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const About = () => {
  return (
    <Box className="mt-28 lg:pl-40 lg:pr-40 pl-10 ">
      <Text className="text-center text-4xl text-[#575a5c] mb-5">About Us</Text>

      <Grid className="md:grid md:grid-cols-2 gap-10 mt-14">
        <Box className="lg:mr-0 mr-10">
          <Image
            src="/images/about-us__1_-removebg-preview.png"
            width={600}
            height={400}
            alt=""
            className="  bg-slate-600 rounded h-96"
          />
        </Box>
        <Box>
          <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5 lg:mt-0 mt-5">
            Who We Are
          </Card.Section>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 text-justify mr-5 lg:mr-0 "
          >
            Perago Information Systems PLCis a cutting edge and innovative
            technology based solution providing company with a focus on
            designing and developing Multi- channel based software solutions
            using Web, SMS, WAP, IVR, Kiosk, social media, and mobile
            applications; custom software development and quality assurance
            services; E- services consulting, development, and Implementation;
            design innovative public service delivery initiatives using
            technology solutions; research and training services; E-governance
            enablement; ICT consulting; and capacity building, in Ethiopia and
            beyond.
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 text-justify mr-5 lg:mr-0 "
          >
            Perago is established by highly qualified and experienced
            professionals in management, economics, business administration,
            software engineering, and information systems management; and it
            also houses professionals who are internationally certified in
            leading edge information and communication technologies.Perago as
            well provides strong technical support and knowledge transfer to
            sustain the competitive advantages gained by customers from their
            investments for Perago’s services.Beside the technical capacity,
            Perago’s management has commendable entrepreneurial flair with
            strong ethical and professional standards.
          </Text>
        </Box>
      </Grid>

      <Card className="mt-16">
        <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5">
          Why Choose Us
        </Card.Section>
        <Grid item xs={4} className="md:grid md:grid-cols-3 gap-10 mt-10 ">
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-center">
                  Diversified Experience in Software Engineering
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                We have hands on consulting and implementation experiences in
                software development, system analysis, and software quality
                assurance at national and regional levels.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500}>Qualified staff</Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                Perago houses internationally certified professionals among the
                few ones in the industry. This highly dedicated and committed
                staffs are the cornerstones for providing quality products and
                services to our customers.We also engage subject matter experts
                to make sure we understand every bit of our customers’ business
                processes.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500}>Customer focus</Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                We foster close relationships, rooted in trust and respect, with
                our customers, and face together the everyday challeng of tying
                the evolving information technology with their business goals.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500}>Understand Customers’ needs</Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                we strive to understand what our customers’ business
                requirements, user requirements, operational requirements, and
                system requirements before moving on to designing
                solutions.Perago is very agile in addressing business processes
                changes during project period.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500}>Awareness of all stakeholders</Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                we engage all stakeholders in every phase of our project life
                cycle in order to get the confidence of users and to ensure the
                solutions are put into service.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 mb-10 h-80"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-center">
                  Minimize the Total Cost of Ownership (TCO)
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                Perago houses internationally certified professionals among the
                few ones in the industry. This highly dedicated and committed
                staffs are the cornerstones for providing quality products and
                services to our customers.We also engage subject matter experts
                to make sure we understand every bit of our customers’ business
                processes.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a]"
              >
                <Text weight={500} className="">
                  Adaptation of technologies
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                fast adaptation of new technologies is the core of our business
                strategy. We help our customers embrace the benefits of
                technology to realize their business goals.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80 mb-10"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a]"
              >
                <Text weight={500} className="">
                  Knowledge Transfer
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                we always work in close partnership with our customers from
                requirement understanding to solution delivery. During all the
                phases we make sure that we able to impart our knowledge to
                customers.
              </Text>
            </Card>
          </Box>
          <Box className="cursor-pointer group">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg hover:scale-100 h-80"
            >
              <Group
                position="center"
                mt="md"
                mb="xs"
                className="text-[#55ba4a] "
              >
                <Text weight={500} className="text-center">
                  Timely Delivery & Support after solution delivery
                </Text>
              </Group>

              <Text size="sm" color="dimmed" className="text-center">
                To ensure long term successes, a high standing and solid
                reputation in the marketplace are required. It is therefore a
                Perago standard to deliver high quality products and services
                within budget and time. We have the commitment to provide world
                class support service to customers’ request.
              </Text>
            </Card>
          </Box>
        </Grid>
      </Card>
    </Box>
  );
};

export default About;

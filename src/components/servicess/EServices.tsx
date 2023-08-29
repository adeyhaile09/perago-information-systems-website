import React from 'react';
import { Card, Text, Box, Group, Flex } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const EServices = () => {
  return (
    <Box className="mt-28 lg:pl-40 lg:pr-40 pl-10 pr-10">
      <Text className="text-center text-5xl text-[#868e96]">eService</Text>
      <Grid className="md:grid md:grid-cols-2 gap-10 mt-14">
        <Box>
          <Image
            src="/images/services.jpg"
            width={530}
            height={400}
            alt=""
            className="lg:mr-10 mr-20"
            style={{ height: '93%' }}
          />
        </Box>
        <Box>
          <Box>
            <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5 lg:mt-0 mt-5">
              One-stop Service Delivery Platform
            </Card.Section>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              It is a solution framework to apply process management in
              e-government with the capabilities of two-way interaction between
              government and citizens. PIS eSERVICES is designed based on
              Service Oriented Architecture for the provision of end-to-end
              electronic public services.
            </Text>

            <Text size="sm" color="dimmed" className="mb-5 text-justify ">
              It provides robust and flexible software capabilities to enable
              organizations to discover, model, execute, rapidly change, govern,
              and gain end-to-end visibility on their core business processes,
              rules and events. Currently, sponsored by the Ministry of
              Communication and Information Technology, this service delivery
              platform is being used by various organizations to provide
              electronic services to their customers.
            </Text>
            <Text size="sm" color="dimmed" className="mb-5 text-justify ">
              There are 32 government organizations (Ministries, Agencies,
              Authorities, AA City Administration Bureaus, and other public
              organizations) on the platform to provide over 160 electronic
              services.
            </Text>
          </Box>
        </Box>
      </Grid>
      <Grid className="md:grid  md:grid-cols-2 mt-10">
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/design3.jpg"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Design & Automate
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center "
          >
            Design your business workflow to be more effective, efficient and
            adaptable Automate your workflow and service delivery infrastructure
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/collabrate.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Improve Visibility
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Improve visibility of service delivery performance
          </Text>
        </Grid>

        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/satisfaction2.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Customer Satisfaction
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Provide multiple channels to customers Collaborate towards one stop
            customer service request fulfillment
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/cost2.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Cost Minimization
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Reduce costs and enhance customer satisfaction
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EServices;

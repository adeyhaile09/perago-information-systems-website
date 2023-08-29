import React from 'react';
import { Card, Text, Box, Group } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const EProcure = () => {
  return (
    <Box className="mt-28 lg:pl-44 lg:pr-48 pr-10 pl-10">
      <Text className="text-center text-5xl text-[#868e96]">eProcure</Text>
      <Grid className="md:grid md:grid-cols-2 gap-40 mt-14">
        <Grid item xs={6}>
          <Image
            src="/images/procure.jpg"
            width={530}
            height={400}
            alt=""
            className="lg:mr-10 mr-20 lg:h-72 lg:max-w-max h-72"
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5 lg:mt-0 mt-5">
              From chaos to order
            </Card.Section>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              The system serves as a collaborative platform through the use of
              Information and Communication Technology in conducting key
              procurement activities in acquisition of goods, works, and
              services with enhanced efficiency in procurement management. The
              PIS ePROCURE value chain consists of indent management, purchase
              requisition, e-Tendering, e-Auctioning, vendor management,
              catalogue management, Order & Ship Notices, and contract
              management.
            </Text>
          </Box>
        </Grid>
      </Grid>
      <Grid className="md:grid  md:grid-cols-2 mt-10">
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/planning.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Ensure better planning
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center "
          >
            All starts with need recognition followed up with formal planning
            process that determines what to buy, when and from what source.
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/bidding3.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Competitive Bidding
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Achieve competitive bidding based on transparency, equity, and
            fairness that improves economy and efficiency in procurement process
          </Text>
        </Grid>

        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/time.jpg"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Just-In-Time Requisition
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Employ just-in-time requisition to increase efficiency and decrease
            waste by receiving goods, services and works only as they are needed
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/contract.jpg"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Streamline contract management
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Streamline contract management
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EProcure;

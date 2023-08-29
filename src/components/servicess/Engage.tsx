import React from 'react';
import { Card, Text, Box, Group } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Engage = () => {
  return (
    <Box className="mt-28 lg:pl-44 lg:pr-48 pl-10 pr-10">
      <Text className="text-center text-5xl text-[#868e96] mb-16">Engage</Text>
      <Grid className="md:grid md:grid-cols-2 gap-40 mt-14">
        <Grid item xs={6}>
          <Image
            // sizes="(max-width: 127%)"
            src="/images/engage.jpg"
            width={530}
            height={400}
            alt=""
            className="lg:mr-10 mr-20 lg:h-72 lg:max-w-max h-72"
          />
        </Grid>
        <Grid item xs={6}>
          <Box className=" ">
            <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5 lg:mt-5 mt-5">
              Customer Engagement Solution
            </Card.Section>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              it is a communication platform between customers and a service
              provider through various electronic channels of correspondence to
              enhance overall customer experiences and delight. The system
              encourages customers' engagement in controlling the quality of
              services and instills accountability in the workplace.
            </Text>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              Currently, sponsored by the Ministry of Communication and
              Information Technology, this customer service platform is being
              used by various organizations for online customer compliant and
              suggestion management. There are 5 government organizations on the
              platform.
            </Text>
          </Box>
        </Grid>
      </Grid>
      <Grid className="md:grid  md:grid-cols-2 mt-10">
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/customer3.svg"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Understand your customer
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5  lg:text-left text-center"
          >
            Let customers speak about their dissatisfactions and let them know
            their feedbacks are valued
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/conversation.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Streamline conversation
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Stay on top of all customer requests coming in from different
            support channels
          </Text>
        </Grid>

        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/collabrate.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Collaborate Better
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Get help from the right people across internal teams by looping them
            into filed cases
          </Text>
        </Grid>
        <Grid item xs={10} className="lg:ml-32">
          <Group position="center">
            <Image
              src="/images/productive2.png"
              width={50}
              height={400}
              alt=""
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Stay productive
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Make use smart automations to get things done faster and better
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Engage;

import React from 'react';
import { Card, Text, Box, Group } from '@mantine/core';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const Measure = () => {
  return (
    <Box className="mt-28 lg:pl-44 lg:pr-48 pl-10 pr-10">
      <Text className="text-center text-5xl text-[#868e96]">Measure</Text>
      <Grid className="md:grid md:grid-cols-2 gap-40 mt-14">
        <Grid>
          <Image
            src="/images/measure.jpg"
            width={530}
            height={400}
            alt=""
            className="lg:mr-10 mr-20 lg:h-72 lg:max-w-max h-72"
          />
        </Grid>
        <Grid item xs={6}>
          <Box className=" ">
            <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5 lg:mt-0 mt-5">
              Strategic planning & Operations System
            </Card.Section>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              PIS-Measure is a web-based collaboration and productivity platform
              to design, plan, execute, measure and manage organizational
              strategy by linking a vision and mission to strategic priorities,
              objectives, measures, and initiatives.
            </Text>
            <Text size="sm" color="dimmed" className="mb-5 text-justify">
              The system is used to monitor and evaluate various projects and
              activities within organizations. It provides comprehensive
              capabilities that address the various challenges that are faced in
              effectively tracking projects and their deliverables.
            </Text>
          </Box>
        </Grid>
      </Grid>
      <Grid className="md:grid  md:grid-cols-3 mt-10 gap-10 ">
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/vision.jpg"
              width={50}
              height={400}
              alt="Vision"
              className="lg:max-h-[470px] mt-14  "
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Aligned Vision
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5  lg:text-left text-center"
          >
            Align their visions and strategies with KPIs
          </Text>
        </Grid>
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/collabration.png"
              width={50}
              height={400}
              className="lg:max-h-[470px] mt-14  "
              alt="Collabration"
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Collaboration
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center "
          >
            Collaborate with team members in real-time
          </Text>
        </Grid>
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/tracking.png"
              width={50}
              height={400}
              className="lg:max-h-[470px] mt-14  "
              alt="Tracking"
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5">
            Tracking
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Track activities, resources and budget
          </Text>
        </Grid>

        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/measurement2.jpg"
              width={50}
              height={400}
              className="lg:max-h-[470px] mt-14  "
              alt="Measurement"
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Measurement
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Measure outputs, outcomes and impacts
          </Text>
        </Grid>
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/optimize.jpg"
              width={50}
              height={400}
              className="lg:max-h-[470px] mt-14  "
              alt="Optimize"
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Optimize
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Optimize decision making and resourcing
          </Text>
        </Grid>
        <Grid item xs={10}>
          <Group position="center">
            <Image
              src="/images/learn.png"
              width={50}
              height={400}
              className="lg:max-h-[470px] mt-14  "
              alt="Learn"
            />
          </Group>

          <Text className="text-center text-xl text-[#55ba4a] mb-5 ">
            Learning
          </Text>
          <Text
            size="sm"
            color="dimmed"
            className="mb-5 lg:text-left text-center"
          >
            Encourage organizational learning
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Measure;

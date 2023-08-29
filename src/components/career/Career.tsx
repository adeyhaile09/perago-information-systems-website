import React from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Text,
} from '@mantine/core';
import Link from 'next/link';

import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

const Career = () => {
  return (
    <Box className="mt-52 lg:pl-48 lg:pr-96 pl-10 pr-10 text-[#575a5c]">
      <Text className="text-5xl text-[#868e96]">
        A CAREER THAT AMPLIFIES YOUR TALENT
      </Text>
      <Text className="text-sm mt-5 mb-8 text-justify leading-6">
        At Perago Information Systems, we pride ourselves on our team feeling.
        We believe that by working together, we can achieve more than we ever
        could alone. That &apos;s why we offer competitive salaries. But
        it&apos;s not just about the money. We also have a flat organization,
        which means that everyone has a voice and an equal say in
        decision-making. This helps to create a more collaborative environment
        where everyone can contribute their best ideas. We&apos;ll be happy to
        welcome you to our team
      </Text>
      <Card radius="sm" withBorder className="shadow ">
        <div className="w-2 h-2 bg-[#55ba4a] rounded-full mr-5 mt-5 mb-[-50px]"></div>
        <Text
          size="lg"
          className="text-[#30343d] font-bold[400] mb-5 mt-6 ml-5 "
          style={{ fontSize: '28px' }}
        >
          Full Stack Developer
        </Text>
        <Text size="sm" className="text-[#575a5c] mb-5">
          We seek to hire an experienced full-stack software developer who can
          be a team player with a knack for visual design and manage projects
          from conception to final product with good organizational skills and
          attention to detail.
        </Text>
        <hr />
        <Text
          size="lg"
          className="text-[#30343d] mb-10 mt-10"
          style={{ fontSize: '28px' }}
        >
          Required Skills
        </Text>
        <Grid grow gutter="sm">
          <Grid.Col span={4}>
            <List spacing="lg" size="sm" center>
              <List.Item icon={<Image src="./images/react.png" alt="" />}>
                React Js
              </List.Item>
              <List.Item icon={<Image src={'./images/saga.png'} alt="" />}>
                Redux saga
              </List.Item>
              <List.Item icon={<Image src={'./images/mongodb.png'} alt="" />}>
                MongoDB
              </List.Item>
            </List>
          </Grid.Col>
          <Grid.Col span={4}>
            <List
              spacing="lg"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck size="1rem" />
                </ThemeIcon>
              }
            >
              <List.Item icon={<Image src={'./images/redux.png'} alt="" />}>
                Redux
              </List.Item>
              <List.Item icon={<Image src={'./images/git.png'} alt="" />}>
                Git
              </List.Item>
              <List.Item icon={<Image src={'./images/node.png'} alt="" />}>
                Node Js
              </List.Item>
            </List>
          </Grid.Col>
        </Grid>
        <Group position="center">
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSeaaNNxKkvydc4DABlz9hcd-rX3IxeqkQFSZvxsSyHdpPse_A/viewform'
            }
            target="https://docs.google.com/forms/d/e/1FAIpQLSeaaNNxKkvydc4DABlz9hcd-rX3IxeqkQFSZvxsSyHdpPse_A/viewform"
            className={` hover:text-[#55ba4a] `}
          >
            <Button className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] mt-12 pl-10 pr-10 ">
              Apply
            </Button>
          </Link>
        </Group>
      </Card>
    </Box>
  );
};

export default Career;

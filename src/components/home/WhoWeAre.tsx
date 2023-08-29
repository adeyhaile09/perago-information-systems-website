import React from 'react';
import { Box, Card, Text } from '@mantine/core';

const WhoWeAre = () => {
  return (
    // <Card
    //   shadow="sm"
    //   padding="sm"
    //   radius="md"
    //   withBorder
    //   className="items-center pt-10 mt-10 p-48 pb-5 ml-20 mr-20"
    // >
    //   <Card.Section className="text-center text-2xl text-[#55ba4a] mb-5">
    //     Who we are
    //   </Card.Section>
    //   <Text size="sm" color="dimmed" className="mb-5 text-center">
    //     Perago Systems is a technology company that focuses on developing and
    //     implementing electronic government and B2B commerce solutions towards
    //     the provision of various online transactional services. Perago provides
    //     strong technical support and knowledge transfer to sustain the
    //     competitive advantages gained by customers from their ICT investments.
    //   </Text>
    // </Card>
    <Box className="items-center pt-20 pb-20  mr-20">
      <Card.Section className=" text-4xl text-[#55ba4a] mb-5 text-center">
        Who we are
      </Card.Section>
      <Text size="sm" color="dimmed" className=" pr-20 ml-52">
        Perago Systems is a technology company that focuses on developing and
        implementing electronic government and B2B commerce solutions towards
        the provision of various online transactional services. Perago provides
        strong technical support and knowledge transfer to sustain the
        competitive advantages gained by customers from their ICT investments.
      </Text>
    </Box>
  );
};

export default WhoWeAre;

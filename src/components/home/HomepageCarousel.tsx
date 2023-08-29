import React from 'react';
import { Box, Image, Text } from '@mantine/core';

const HomepageCarousel = () => {
  return (
    <Box>
      <Image
        src={'./images/WebHerosFlat_0004_eservice2.jpg'}
        width={'100%'}
        alt=""
        style={{ marginTop: '49px' }}
      />
      <Box className="bg-[#00000082] top-0 right-0 left-0 lg:bottom-16 bottom-16 absolute">
        <Text
          className="absolute lg:top-60 top-24 lg:text-sm text-xs  right-5 text-center text-[#fff]"
          style={{
            left: '60%',
          }}
        >
          Align your vision and strategy with your KPIs, collaborate with team
          members in real-time, track activities, resources and budget and much
          more.
        </Text>
      </Box>
    </Box>
  );
};

export default HomepageCarousel;

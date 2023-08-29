import React, { useState, useEffect } from 'react';
import { Box, Card, Group, Image, Text } from '@mantine/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Grid } from '@mui/material';

const Testimonials = () => {
  const [slide, setSlide] = useState(1);
  const [isMdWidth, setIsMdWidth] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMdWidth(true);
      setSlide(1);
    }
  }, [setSlide]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsMdWidth(true);
        setSlide(1);
      } else {
        setIsMdWidth(false);
        setSlide(3);
      }
    });
  }, [setSlide]);

  return (
    <>
      <Box className=" mt-14 lg:pl-40 lg:pr-40 pl-10 pr-10  ">
        <Text className="text-center text-4xl text-[#55ba4a] mb-5">
          TESTIMONIALS
        </Text>
        <Swiper
          slidesPerView={!isMdWidth ? 3 : slide}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className=" w-full h-72  mt-20  "
          style={
            {
              '--swiper-pagination-color': '#55ba4a',
              'lg:--swiper-pagination-top': '13em',
            } as any
          }
        >
          <Grid
            item
            xs={4}
            className="md:grid md:grid-cols-1 gap-10 mt-10 pb-28 text-[#868e96]  "
          >
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
            <SwiperSlide className="text-center  ">
              <Card shadow="sm" radius="md" withBorder className="cursor-grab">
                <Text size="sm" color="dimmed" className="italic ">
                  A solution framework to apply process management in
                  e-government with the capabilities of two-way interaction
                  between government and citizens.
                </Text>
                <Group className=" mt-8">
                  <Image
                    src="/images/testimonial2.png"
                    alt=""
                    height={50}
                    width={50}
                  />
                  <Group className="flex flex-col mt-8 text-[#868e96] ">
                    <Text size="sm">Melissa J. Talley</Text>

                    <Text
                      size="sm"
                      className="text-[#55ba4a] mt-[-13px] ml-[-10px]"
                    >
                      Entrepreneur
                    </Text>
                  </Group>
                </Group>
              </Card>
            </SwiperSlide>
          </Grid>
        </Swiper>
      </Box>
    </>
  );
};

export default Testimonials;

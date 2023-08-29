import React from 'react';
import { Card, Text, Group, Box } from '@mantine/core';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Form from './Form';
import Mapp from './Map';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <Card className="pt-36 lg:pl-44 lg:pr-48 pl-10 ">
        <Text mb={20} mt={90} className="text-4xl text-[#868e96]">
          WE ARE EXCITED TO HEAR FROM YOU
        </Text>
        <Form />
      </Card>
      <Grid
        item
        xs={12}
        className="md:grid md:grid-cols-4 bg-[#F5F5F5] pt-10 pb-10 text-[#32373b] pl-20 text-sm"
      >
        <Group className="flex flex-col mb-10">
          <Link
            href={
              'https://www.google.com/maps/place/Perago+Systems/@9.0152316,38.7863619,20z/data=!4m21!1m14!4m13!1m4!2m2!1d38.7862788!2d9.0154304!4e1!1m6!1m2!1s0x164b857257581585:0xd7e23dc8850ecb49!2zR29sYWd1bCBUb3dlciB8IEhheWFodWxldCB8IOGMjuGIi-GMieGIjSDhiIXhipXhjYMgfCDhiIPhi6vhiIHhiIjhibUsIDJROFArNUo3LCBIYXlhIEh1bGV0IFJvdW5kYWJvdXQsIOGKoOGLsuGItSDhiqDhiaDhiaM!2m2!1d38.7865408!2d9.0154166!3e0!3m5!1s0x164b85c4187c321b:0xe1f8970b17e18c0b!8m2!3d9.0151695!4d38.786337!16s%2Fg%2F11j4ppvy7v!5m1!1e1?entry=ttu'
            }
            target="https://www.google.com/maps/place/Perago+Systems/@9.0152316,38.7863619,20z/data=!4m21!1m14!4m13!1m4!2m2!1d38.7862788!2d9.0154304!4e1!1m6!1m2!1s0x164b857257581585:0xd7e23dc8850ecb49!2zR29sYWd1bCBUb3dlciB8IEhheWFodWxldCB8IOGMjuGIi-GMieGIjSDhiIXhipXhjYMgfCDhiIPhi6vhiIHhiIjhibUsIDJROFArNUo3LCBIYXlhIEh1bGV0IFJvdW5kYWJvdXQsIOGKoOGLsuGItSDhiqDhiaDhiaM!2m2!1d38.7865408!2d9.0154166!3e0!3m5!1s0x164b85c4187c321b:0xe1f8970b17e18c0b!8m2!3d9.0151695!4d38.786337!16s%2Fg%2F11j4ppvy7v!5m1!1e1?entry=ttu"
          >
            <LocationOnIcon color="success" className="item-center" />
          </Link>

          <Text>
            Noah Realstate - 4th floor, Near Golagol Mall <br /> Addis Ababa,
            Ethiopia
          </Text>
        </Group>
        <Group className="flex flex-col mb-10">
          <LocalPhoneIcon color="success" className="item-center" />
          <Text>
            +251-114 -701998 <br /> +251-911-231622
          </Text>
        </Group>
        <Group className="flex flex-col mb-10">
          <Link href={'mailto:info@peragosystems.com'}>
            <EmailIcon color="success" className="item-center" />
          </Link>
          <Text>
            info@peragosystems.com <br /> sales@peragosystems.com
          </Text>
        </Group>
        <Group className="flex flex-col">
          <MarkEmailUnreadIcon color="success" className="item-center" />
          <Text mt={10}>Po.Box: 139 Addis Ababa, Ethiopia </Text>
        </Group>
      </Grid>
      <Box>
        <Text className="text-center text-xl mb-5 mt-5">Locate Us</Text>
        <Mapp />
      </Box>
    </>
  );
};

export default ContactUs;

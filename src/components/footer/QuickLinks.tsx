import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Email } from '@mui/icons-material';
import Link from 'next/link';
import { Box, List, Text } from '@mantine/core';
import { Grid } from '@mui/material';
import Image from 'next/image';

const QuickLinks = () => {
  return (
    <Grid className=" md:grid md:grid-cols-4 text-white">
      <Grid md={3} lg={6}>
        <Image
          src={'/images/perago-white.png'}
          alt=""
          width={190}
          height={30}
          className="mx-auto block mt-8"
        />
      </Grid>
      <Grid md={3} lg={6} className="mt-5">
        <Text className="font-bold text-center lg:text-left">
          Perago Information Systems
        </Text>
        <Text className="text-sm text-center lg:text-left">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </Text>

        <Box className="cursor-pointer flex flex-nowrap  mt-5 gap-2 lg:ml-0 ml-44 ">
          <Link
            href="https://www.linkedin.com/company/perago-information-systems-plc/mycompany/"
            target="https://www.linkedin.com/company/perago-information-systems-plc/mycompany/"
          >
            <LinkedInIcon />
          </Link>

          <Link href={'/'}>
            <TwitterIcon />
          </Link>
          <Link href={'/'}>
            <FacebookIcon />
          </Link>
        </Box>
      </Grid>

      <Grid md={3} lg={6} className="grid grid-cols-2 lg:ml-0 ml-20 mt-5">
        <Grid>
          <Text weight={700}>Company</Text>
          <List className="text-white text-sm  ">
            <List.Item>
              <Link href={'/'}>⟶ Home</Link>
            </List.Item>
            <List.Item>
              <Link href={'/projects'}>⟶ Project</Link>
            </List.Item>
            <List.Item>
              <Link href={'/about'}>⟶ About</Link>
            </List.Item>
            <List.Item>
              <Link href={'/career'}>⟶ Career</Link>
            </List.Item>
            <List.Item>
              <Link href={'/contact'}>⟶ Contact</Link>
            </List.Item>
          </List>
        </Grid>
        <Grid md={3} lg={6}>
          <Text weight={700}>Services</Text>
          <List className="text-white text-sm">
            <List.Item>
              <Link href={'/servicess/eServices'}>⟶ eServices</Link>
            </List.Item>
            <List.Item>
              <Link href={'/servicess/eProcure'}>⟶ eProcure</Link>
            </List.Item>
            <List.Item>
              <Link href={'/servicess/engage'}>⟶ Engage</Link>
            </List.Item>
            <List.Item>
              <Link href={'/servicess/measure'}>⟶ Measure</Link>
            </List.Item>
            <List.Item>
              <Link href={'/'}>⟶ ePay</Link>
            </List.Item>
          </List>
        </Grid>
      </Grid>
      <Grid md={3} lg={6} className="mt-5 ">
        <Text weight={700} className="lg:text-left text-center">
          Get In Touch
        </Text>
        <List className="text-white text-xs ml-28 lg:ml-0">
          <List.Item>
            <Link
              href={
                'https://www.google.com/maps/place/Perago+Systems/@9.0152316,38.7863619,20z/data=!4m21!1m14!4m13!1m4!2m2!1d38.7862788!2d9.0154304!4e1!1m6!1m2!1s0x164b857257581585:0xd7e23dc8850ecb49!2zR29sYWd1bCBUb3dlciB8IEhheWFodWxldCB8IOGMjuGIi-GMieGIjSDhiIXhipXhjYMgfCDhiIPhi6vhiIHhiIjhibUsIDJROFArNUo3LCBIYXlhIEh1bGV0IFJvdW5kYWJvdXQsIOGKoOGLsuGItSDhiqDhiaDhiaM!2m2!1d38.7865408!2d9.0154166!3e0!3m5!1s0x164b85c4187c321b:0xe1f8970b17e18c0b!8m2!3d9.0151695!4d38.786337!16s%2Fg%2F11j4ppvy7v!5m1!1e1?entry=ttu'
              }
              target="https://www.google.com/maps/place/Perago+Systems/@9.0152316,38.7863619,20z/data=!4m21!1m14!4m13!1m4!2m2!1d38.7862788!2d9.0154304!4e1!1m6!1m2!1s0x164b857257581585:0xd7e23dc8850ecb49!2zR29sYWd1bCBUb3dlciB8IEhheWFodWxldCB8IOGMjuGIi-GMieGIjSDhiIXhipXhjYMgfCDhiIPhi6vhiIHhiIjhibUsIDJROFArNUo3LCBIYXlhIEh1bGV0IFJvdW5kYWJvdXQsIOGKoOGLsuGItSDhiqDhiaDhiaM!2m2!1d38.7865408!2d9.0154166!3e0!3m5!1s0x164b85c4187c321b:0xe1f8970b17e18c0b!8m2!3d9.0151695!4d38.786337!16s%2Fg%2F11j4ppvy7v!5m1!1e1?entry=ttu"
            >
              <FmdGoodIcon className="mr-2 mb-2" />
            </Link>
            2Q8P+3G, Haya Hulet, Addis Ababa
          </List.Item>
          <List.Item>
            <LocalPhoneIcon className="mr-2 mb-2 " />
            +251 114 701 998 | +251 911 231 622
          </List.Item>
          <List.Item>
            <Link href={'mailto:info@peragosystems.com'}>
              <Email className="mr-2" />
            </Link>
            info@peragosystems.com
          </List.Item>
        </List>
      </Grid>
    </Grid>
  );
};

export default QuickLinks;

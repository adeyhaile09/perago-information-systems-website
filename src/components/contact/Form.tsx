import React, { useState } from 'react';
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Textarea,
  Grid,
  Image,
  Card,
} from '@mantine/core';
import { useForm } from '@mantine/form';
// import { useForm } from 'react-hook-form';

const Form = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      termsOfService: false,
    },

    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Grid className="md:grid md:grid-cols-2 ml-4  ">
      <Box>
        <Card shadow="lg" withBorder mt={20} h={'auto'} className="w-96">
          <Box maw={300} mx="auto" className=" mt-5 ">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <TextInput
                withAsterisk
                label="Name"
                placeholder="name"
                {...form.getInputProps('name')}
              />{' '}
              <br />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />{' '}
              <br />
              <Textarea label="Message" placeholder="message" /> <br />
              <Group position="right" mt="md">
                <Button
                  type="submit"
                  className="hover:bg-[#55ba4a] hover:text-[#fff] rounded-2xl border-[#55ba4a] text-[#575a5c] pl-10 pr-10"
                >
                  Submit
                </Button>
              </Group>
            </form>
          </Box>
        </Card>
      </Box>
      <Box>
        <Image src={'/images/contact3.png'} alt="" />
      </Box>
    </Grid>
  );
};

export default Form;

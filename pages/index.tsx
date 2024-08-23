import { FC } from 'react';
import {
  Select,
  TextInput,
  Box,
  Flex,
  NumberInput,
  Textarea,
  Divider,
  Text,
  Grid,
  Button,
  CopyButton,
} from '@mantine/core';

import { useForm } from '@mantine/form';

type HomeProps = {
  theme: string;
};

const Home: FC<HomeProps> = ({ theme }) => {
  const form = useForm({
    initialValues: {
      text: '',
      number: 1,
      dropdown: '',
      textarea: '',
    },
    validate: {
      text: (value) => !value.trim().length,
    },
  });

  return (
    <Grid h={'100%'} m={0}>
      <Grid.Col
        sx={(theme) => ({
          boxShadow: theme.shadows.md,
          backgroundColor: '#FDFDFD',
          borderRight: '1px solid',
          borderColor: '#D9D9D9',
        })}
        sm={6}
      >
        <Box py={24} px={'16px'} w={{ base: '100%' }}>
          <h1>Current theme: {theme}</h1>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              mb={'24px'}
              placeholder="Input Text"
              label="Input Text"
              {...form.getInputProps('text')}
            />

            <Divider mb="24px" />

            <Select
              w="100%"
              data={['Option 1', 'Option 2', 'Option 3']}
              placeholder="E.g Option 1, Option 2, Option 3"
              mb={'24px'}
              label="Dropdown"
              {...form.getInputProps('dropdown')}
            />

            <Divider mb="24px" />

            <NumberInput
              w="100%"
              mb={'24px'}
              min={1}
              label="Number"
              {...form.getInputProps('number')}
            />

            <Divider mb="24px" />

            <Textarea
              autosize
              minRows={3}
              mb={'24px'}
              placeholder="Textarea"
              label="Textarea"
              {...form.getInputProps('textarea')}
            />

            <Divider mb="24px" />

            <Flex justify="flex-end">
              <Button
                disabled={!form.isValid()}
                size="md"
                color="violet"
                type="submit"
              >
                <Text>Submit Button</Text>
              </Button>
            </Flex>
          </form>
        </Box>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Box p="20px">
          <Flex mt="112px" direction="column" justify="center" align="center">
            <CopyButton value="Text to be copied">
              {({ copied, copy }) => (
                <Button
                  mb={50}
                  size="sm"
                  px={8}
                  variant="default"
                  onClick={copy}
                >
                  <Text>{copied ? 'Copied' : 'Copy'}</Text>
                </Button>
              )}
            </CopyButton>
            <Text size="14px" color="#202123">
              Right Side Content
            </Text>
          </Flex>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Home;

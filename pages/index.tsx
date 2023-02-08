import { FC } from 'react';
import { AppDetailsHeader, TextInputLeftComponent } from '@/components';
import {
  Stack,
  Flex,
  Select,
  TextInput,
  Textarea,
  Group,
  Text,
  Checkbox,
  Grid,
  Button,
} from '@mantine/core';

const Home: FC = () => {
  return (
    <>
      <AppDetailsHeader
        title="Online curl command line builder"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <Flex w="100%" justify="flex-start" align="flex-start">
        <Stack w={{ base: '100%', sm: '50%' }}>
          <Select
            w="100%"
            data={['GET', 'POST', 'PUT', 'DELETE']}
            placeholder="Select a method"
            label="HTTP Method"
          />

          <TextInput
            icon={<TextInputLeftComponent title="https://" />}
            iconWidth={70}
            w="100%"
            label="URL"
          />

          <Textarea placeholder="Insert body elements here" label="Body" />

          <Group grow>
            <TextInput placeholder="Header key" label="Custom Headers" />

            <TextInput key="" placeholder="Header value" label="&nbsp;" />
          </Group>

          <Text underline weight={600} size={14}>
            Add custom header
          </Text>

          <Grid grow>
            <Grid.Col sm={6}>
              <Checkbox label="JSON Content-type" />
            </Grid.Col>

            <Grid.Col sm={6}>
              <Checkbox label="Accept self-signed certs" />
            </Grid.Col>

            <Grid.Col>
              <Checkbox label="Verbose" />
            </Grid.Col>
          </Grid>

          <Group position="apart">
            <Text weight={700} size={16} align="left">
              Preview
            </Text>
            <Button color="dark">Copy</Button>
          </Group>

          {/* Testing purposes only, please avoid inline styling and use Mantine or our reusable components */}
          <div
            style={{
              height: 300,
              width: '100%',
              borderRadius: 4,
              border: '1px solid #EAEAEA',
            }}
          />
        </Stack>
      </Flex>
    </>
  );
};

export default Home;

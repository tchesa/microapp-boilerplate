import { FC } from 'react';
import { Divider, Flex, Group, Title } from '@mantine/core';
import Image from 'next/image';
import { emailShareLogo, linkedInShareLogo, twitterShareLogo } from '@/assets';

interface AppDetailsHeaderProps {
  title: string;
  subtitle: string;
}

const AppDetailsHeader: FC<AppDetailsHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <Flex
        w="100%"
        direction={{ base: 'column', sm: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', sm: 'flex-end' }}
      >
        <Flex
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <Title order={1} size={32} align="left">
            {title}
          </Title>
          <Title order={4} weight={400} size={14} align="left">
            {subtitle}
          </Title>
        </Flex>

        <Flex
          justify="flex-end"
          align="center"
          mt={{ base: 28, sm: 0 }}
        >
          <Title weight={400} size={14} order={4} align="left" mr={24}>
            Share:
          </Title>
          <Group spacing={10} position="right" noWrap>
            <Image src={linkedInShareLogo} width={42} height={42} alt="linkedin" />
            <Image src={twitterShareLogo} width={42} height={42} alt="twitter" />
            <Image src={emailShareLogo} width={42} height={42} alt="email" />
          </Group>
        </Flex>
      </Flex>
      
      <Divider my="sm" w="100%" color="#EAEAEA" />
    </>
  );
};

export default AppDetailsHeader;

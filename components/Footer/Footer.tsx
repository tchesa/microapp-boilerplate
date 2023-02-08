import { tikTokIcon, twitterIcon } from '@/assets';
import { Text, Group, Container, Flex } from '@mantine/core';
import { Logo } from 'components';
import Image from 'next/image';
import { useStyles } from './styles';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Group spacing={10} className={classes.links} position="left" noWrap>
          <Text<'a'>
            weight={400}
            size="sm"
            href="#"
            className={classes.link}
          >
            Apps
          </Text>
          <Text<'a'>
            weight={400}
            size="sm"
            href="#"
            className={classes.link}
          >
            About Us
          </Text>
          <Text<'a'>
            weight={600}
            size="sm"
            href="#"
            className={classes.link}
          >
            Suggest an App
          </Text>
        </Group>

        <Group spacing={10} className={classes.social} position="right" noWrap>
          <Image src={tikTokIcon} width={48} height={48} alt="tiktok" />
          <Image src={twitterIcon} width={48} height={48} alt="twitter" />
        </Group>
      </Container>
      <Container className={classes.afterFooter}>
        <Flex align="center" justify="flex-start">
          <Text className={classes.link} size="sm">
            © 2023 Microapp Inc
          </Text>
        </Flex>

        <Flex className={classes.gridItem} align="center" justify="center">
          <Logo fixedTheme="dark" />
        </Flex>

        <Group spacing={10} className={classes.social} position="right" noWrap>
          <Text<'a'>
            weight={300}
            size="sm"
            href="#"
            className={classes.link}
          >
            Terms of Service
          </Text>
          <Text<'a'>
            weight={300}
            size="sm"
            href="#"
            className={classes.link}
          >
            Privacy Policy
          </Text>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;

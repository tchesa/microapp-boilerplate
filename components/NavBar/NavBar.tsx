import { FC, useState } from 'react';
import { useHandleOpenCommandPalette } from 'react-cmdk';
import { Header, Group, Input, ActionIcon, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { ColorSchemeToggle, Logo } from '@/components';
import { useStyles } from './styles';
import Link from 'next/link';

const NavBar: FC = () => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);

  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 992px)');

  useHandleOpenCommandPalette(setModalOpened);

  return (
    <>
      <Header height={56} className={classes.header} fixed>
        <Container className={classes.inner}>
          <Group>
            <Link href="/">
              <Logo full={matches} />
            </Link>
          </Group>

          <Group>
            <ActionIcon
              onClick={() => setModalOpened(true)}
              size="lg"
              className={classes.searchIcon}
            >
              <IconSearch size={18} />
            </ActionIcon>
            <Input
              onClick={() => setModalOpened(true)}
              className={classes.search}
              placeholder="Search ( ⌘ + k )"
              icon={<IconSearch size={16} />}
            />
            <ColorSchemeToggle />
          </Group>
        </Container>
      </Header>
    </>
  );
};

export default NavBar;

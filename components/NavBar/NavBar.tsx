import { Header, Autocomplete, Group, Burger, Button } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import { ColorSchemeToggle, Logo } from '@/components';
import { useStyles } from './styles';

interface HeaderSearchProps {
  links: { link: string; label: string }[];
}

const NavBar = ({ links }: HeaderSearchProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width: 992px)');

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} className={classes.header} fixed>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hidden={matches} />
          <Logo full={matches} />
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
            <Button color="dark">Suggest an App</Button>
          </Group>
        </Group>

        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
          <ColorSchemeToggle />
        </Group>
      </div>
    </Header>
  );
};

export default NavBar;

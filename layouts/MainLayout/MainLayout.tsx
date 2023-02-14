import { Container } from '@mantine/core';
import { NavBar, Footer } from 'components';
import { useStyles } from './styles';

interface MainLayoutProps {
  children: React.ReactNode;
  withFooter?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  withFooter = false,
}) => {
  const { classes } = useStyles();

  return (
    <div className={classes.mainContainer}>
      <NavBar />
      <div className={classes.childrenContainer}>
        <Container className={classes.children}>{children}</Container>
      </div>
      {withFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto'
  },
  childrenContainer: {
    width: '100%',
    overflow: 'auto'
  },
  children: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4
  },
}));
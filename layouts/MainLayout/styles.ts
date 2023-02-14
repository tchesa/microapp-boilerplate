import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
  childrenContainer: {
    width: '100%',
    overflow: 'auto',
  },
  children: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 4,
  },
}));

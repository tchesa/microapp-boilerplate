import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    left: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    fontSize: 14,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#888',
    borderRight: '1px solid #EAEAEA'
  }
}));

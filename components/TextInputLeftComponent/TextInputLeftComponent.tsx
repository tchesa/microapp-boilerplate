import { FC } from 'react';
import { useStyles } from './styles';

interface TextInputLeftComponentProps {
  title: string;
}

const TextInputLeftComponent: FC<TextInputLeftComponentProps> = ({ title }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>{title}</div>
  );
};

export default TextInputLeftComponent;
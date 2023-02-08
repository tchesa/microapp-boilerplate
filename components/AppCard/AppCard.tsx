import { FC } from 'react';
import { Card, Title, Text, Button } from '@mantine/core';

interface AppCardProps {
  title: string;
  bodyText: string;
  buttonTitle: string;
}

const AppCard: FC<AppCardProps> = ({
  title,
  bodyText,
  buttonTitle,
}) => {
  return (
    <Card p="lg" radius="md" withBorder>
      <Title order={1} weight={600} size={24}>{title}</Title>

      <Text size="sm">
        {bodyText}
      </Text>

      <Button color="dark" mt="xl" radius="sm">
        {buttonTitle}
      </Button>
    </Card>
  );
};

export default AppCard;

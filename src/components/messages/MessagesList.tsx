import { Container, Loader, Typography } from '@mantine/core';
import { db } from '~/lib/db';
import { MessageItem } from './MessageItem';

export const MessagesList = () => {
  const { isLoading, error, data } = db.useQuery({ messages: {} });

  if (isLoading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return (
      <Typography style={{ color: 'var(--mantine-color-error)' }}>
        Error: {error.message}
      </Typography>
    );
  }

  const { messages } = data;

  return (
    <>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </>
  );
};

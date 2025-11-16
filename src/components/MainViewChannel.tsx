import { Container, Loader, Stack, Typography } from '@mantine/core';
import { db } from '~/lib/db';
import { Editor } from './editor/Editor';
import styles from './MainViewChannel.module.css';
import { MessageItem } from './messages/MessageItem';

export const MainViewChannel = () => {
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
    <Container size="md" fluid className={styles.container}>
      <Stack className={styles.messages}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </Stack>

      <Editor />
    </Container>
  );
};

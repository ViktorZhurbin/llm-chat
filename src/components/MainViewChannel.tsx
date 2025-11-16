import { Container, Stack } from '@mantine/core';
import { useState } from 'react';
import { MessageItem } from './editor/MessageItem';
import { MessageEditor } from './editor/MessageEditor';
import type { Message } from './editor/types';
import styles from './MainViewChannel.module.css';

export const MainViewChannel = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <Container size="md" fluid className={styles.container}>
      <Stack className={styles.messages}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </Stack>

      <MessageEditor onSubmit={addMessage} />
    </Container>
  );
};

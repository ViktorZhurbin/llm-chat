import { Container, Stack } from '@mantine/core';
import styles from './MainViewChannel.module.css';
import { TipTapEditor } from './TipTapEditor';

export const MainViewChannel = () => {
  return (
    <Container size="md" fluid className={styles.container}>
      <Stack className={styles.messages}>
        Messages
      </Stack>
      <TipTapEditor />
    </Container>
  );
};

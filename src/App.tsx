import '@mantine/core/styles.css';
import './App.css';

import {
  Button,
  createTheme,
  MantineProvider,
  Stack,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { Header } from './components/Header/Header';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <div className="root">
        <header className="header">
          <Header />
        </header>

        <main className="main">
          <Stack h="100%" justify="center" align="center">
            <Title>Rsbuild + React</Title>

            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
          </Stack>
        </main>
      </div>
    </MantineProvider>
  );
};

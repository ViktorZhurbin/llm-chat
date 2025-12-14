import "@mantine/core/styles.css";
// ‼️ import tiptap styles after core package styles
import "@mantine/tiptap/styles.css";

import "./App.css";

import { MantineProvider, Stack } from "@mantine/core";
import { Header } from "./components/Header/Header";
import { MainViewChannel } from "./components/MainViewChannel";
import { theme } from "./lib/theme";

export const App = () => {
	return (
		<MantineProvider theme={theme} defaultColorScheme="auto">
			<title>Chat</title>

			<div className="root">
				<header className="header">
					<Header />
				</header>

				<main className="main">
					<Stack h="100%" justify="center" align="center">
						<MainViewChannel />
					</Stack>
				</main>
			</div>
		</MantineProvider>
	);
};

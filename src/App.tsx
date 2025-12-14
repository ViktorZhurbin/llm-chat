import "@mantine/core/styles.css";
import "./App.css";

import { MantineProvider, Stack } from "@mantine/core";
import { useState } from "react";
import { Header } from "./blocks/Header/Header";
import { MainViewChannel } from "./feature/chat/MainViewChannel";
import { DocsList } from "./feature/docs/DocsList";
import { theme } from "./lib/theme";

export const App = () => {
	const [view, setView] = useState<"chat" | "docs">("docs");

	return (
		<MantineProvider theme={theme} defaultColorScheme="auto">
			<title>{view === "chat" ? "Chat" : "Docs"}</title>

			<div className="root">
				<header className="header">
					<Header view={view} setView={setView} />
				</header>

				<main className="main">
					{view === "docs" ? (
						<Stack h="100%">
							<DocsList />
						</Stack>
					) : (
						<Stack h="100%" justify="center" align="center">
							<MainViewChannel />
						</Stack>
					)}
				</main>
			</div>
		</MantineProvider>
	);
};

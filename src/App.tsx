import "@mantine/core/styles.css";
import "./App.css";

import { MantineProvider } from "@mantine/core";
import { Route, Switch } from "wouter";
import { Header } from "./components/layout/Header/Header";
import { Routes } from "./constants/routes";
import { theme } from "./lib/theme";
import { Chat } from "./pages/Chat";
import { Doc } from "./pages/Doc";
import { DocsHome } from "./pages/DocsHome";
import { Root } from "./pages/Root";

export const App = () => {
	return (
		<MantineProvider theme={theme} defaultColorScheme="auto">
			<div className="root">
				<header className="header">
					<Header />
				</header>

				<main className="main">
					<Switch>
						<Route path={Routes.ROOT} component={Root} />

						<Route path={Routes.CHAT} component={Chat} />
						<Route path={Routes.DOCS_HOME} component={DocsHome} />
						<Route path={Routes.DOC} component={Doc} />
					</Switch>
				</main>
			</div>
		</MantineProvider>
	);
};

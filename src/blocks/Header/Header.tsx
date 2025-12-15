import { NavLink } from "@mantine/core";
import { Link, useRoute } from "wouter";
import { Routes } from "~/constants/routes";
import { DarkModeToggle } from "~/ui/DarkModeToggle/DarkModeToggle";
import styles from "./Header.module.css";

export const Header = () => {
	const [isChat] = useRoute(Routes.CHAT);
	const [isDocs] = useRoute(`${Routes.DOCS_HOME}/*?`);

	return (
		<div className={styles.root}>
			<div className={styles.innerWrapper}>
				<NavLink
					label="Docs"
					component={Link}
					href={Routes.DOCS_HOME}
					active={isDocs}
				/>

				<NavLink
					label="Chat"
					href={Routes.CHAT}
					component={Link}
					active={isChat}
				/>
			</div>

			<div className={styles.innerWrapper}>
				<DarkModeToggle />
			</div>
		</div>
	);
};

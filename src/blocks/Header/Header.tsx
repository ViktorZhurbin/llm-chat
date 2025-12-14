import { NavLink } from "@mantine/core";
import { DarkModeToggle } from "~/ui/DarkModeToggle/DarkModeToggle";
import styles from "./Header.module.css";

export const Header = (props: {
	view: "chat" | "docs";
	setView: (view: "chat" | "docs") => void;
}) => {
	return (
		<div className={styles.root}>
			<div className={styles.innerWrapper}>
				<NavLink
					active={props.view === "docs"}
					onClick={() => props.setView("docs")}
					label="Docs"
				/>

				<NavLink
					active={props.view === "chat"}
					onClick={() => props.setView("chat")}
					label="Chat"
				/>
			</div>

			<div className={styles.innerWrapper}>
				<DarkModeToggle />
			</div>
		</div>
	);
};

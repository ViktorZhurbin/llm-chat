import { DarkModeToggle } from "~/ui/DarkModeToggle/DarkModeToggle";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.innerWrapper}></div>

			<div className={styles.innerWrapper}>
				<DarkModeToggle />
			</div>
		</div>
	);
};

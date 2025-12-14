import "@mantine/tiptap/styles.css";

import { Container, Stack } from "@mantine/core";
import { Editor } from "./editor/Editor";
import styles from "./MainViewChannel.module.css";
import { MessagesList } from "./messages/MessagesList";

export const MainViewChannel = () => {
	return (
		<Container size="md" fluid className={styles.container}>
			<Stack className={styles.messages}>
				<MessagesList />
			</Stack>

			<Editor classNames={{ content: styles.editorContent }} />
		</Container>
	);
};

import "@mantine/tiptap/styles.css";

import { Container, Stack } from "@mantine/core";
import { Editor } from "~/feature/chat/editor/Editor";
import { MessagesList } from "~/feature/chat/messages/MessagesList";
import styles from "./Chat.module.css";

export const MainViewChannel = () => {
	return (
		<Stack h="100%" justify="center" align="center">
			<Container size="md" fluid className={styles.container}>
				<Stack className={styles.messages}>
					<MessagesList />
				</Stack>

				<Editor classNames={{ content: styles.editorContent }} />
			</Container>
		</Stack>
	);
};

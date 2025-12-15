import "@mantine/tiptap/styles.css";

import { Container, Stack } from "@mantine/core";
import { Editor } from "~/components/domain/chat/editor/Editor";
import { MessagesList } from "~/components/domain/chat/messages/MessagesList";
import styles from "./Chat.module.css";

export const Chat = () => {
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

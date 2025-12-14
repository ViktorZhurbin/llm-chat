import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/blocknoteStyles.css";
import "./styles.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { id } from "@instantdb/react";
import { useComputedColorScheme } from "@mantine/core";
import { db } from "~/lib/db";
import type { Doc } from "~/types/doc";

export const Docs = () => {
	const editor = useCreateBlockNote();
	const computedColorScheme = useComputedColorScheme();

	useEditorChange((editor) => {
		// The current document content as a string
		const savedBlocks = JSON.stringify(editor.document);
		addDoc(savedBlocks);
	}, editor);

	return <BlockNoteView editor={editor} theme={computedColorScheme} />;
};

function addDoc(content: Doc["content"]) {
	db.transact(
		db.tx.docs[id()].update({
			id: id(),
			content,
			createdAt: Date.now(),
		}),
	);
}

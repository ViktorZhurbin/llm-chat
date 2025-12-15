import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/blocknoteStyles.css";
import "./styles.css";

import type { Block } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { useComputedColorScheme } from "@mantine/core";
import { DocsApi } from "~/api/docs";
import type { DocType } from "~/types/doc";

export const Doc = (props: { doc: DocType }) => {
	const { doc } = props;

	// biome-ignore lint/suspicious/noExplicitAny: all good
	const initialContent = JSON.parse(doc.content) as Block<any, any, any>[];

	const editor = useCreateBlockNote({ initialContent });
	const computedColorScheme = useComputedColorScheme();

	useEditorChange((editor) => {
		// The current document content as a string
		const savedBlocks = JSON.stringify(editor.document);

		DocsApi.updateField({ id: doc.id, payload: savedBlocks });
	}, editor);

	return <BlockNoteView editor={editor} theme={computedColorScheme} />;
};

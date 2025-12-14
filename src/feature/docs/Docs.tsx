import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/blocknoteStyles.css";
import "./styles.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useComputedColorScheme } from "@mantine/core";

export const Docs = () => {
	const editor = useCreateBlockNote();
	const computedColorScheme = useComputedColorScheme();

	return <BlockNoteView editor={editor} theme={computedColorScheme} />;
};

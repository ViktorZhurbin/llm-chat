import { id } from "@instantdb/react";
import { RichTextEditor, useRichTextEditorContext } from "@mantine/tiptap";
import { db } from "~/lib/db";
import type { Message } from "~/types/message";

export const Content = () => {
  const { editor } = useRichTextEditorContext();

  return (
    <RichTextEditor.Content
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          if (!editor) return;

          addMessage(editor.getJSON());

          editor.commands.setContent("");
        }
      }}
    />
  );
};

function addMessage(content: Message["content"]) {
  db.transact(
    db.tx.messages[id()].update({
      id: id(),
      content,
      createdAt: Date.now(),
    }),
  );
}

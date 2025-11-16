import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import type { Message } from './types';

export const Content = (props: { onSubmit: (message: Message) => void }) => {
  const { onSubmit } = props;

  const { editor } = useRichTextEditorContext();

  const handleSubmit = () => {
    if (!editor) return;

    const message: Message = {
      id: Date.now().toString(),
      content: editor.getJSON(),
    };

    onSubmit(message);

    editor.commands.setContent('');
  };

  return (
    <RichTextEditor.Content
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          // e.preventDefault();
          // e.stopPropagation();

          console.log('Enter');
          handleSubmit();
        }
      }}
    />
  );
};

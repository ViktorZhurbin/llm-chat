import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import { Content } from './Content';
import { extensions } from './extensions';
import styles from './MessageEditor.module.css';
import { Toolbar } from './Toolbar';
import type { Message } from './types';

export function MessageEditor(props: { onSubmit: (message: Message) => void }) {
  const { onSubmit } = props;

  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions,
  });

  return (
    <RichTextEditor
      editor={editor}
      variant="subtle"
      classNames={{ content: styles.content }}
    >
      <Toolbar />
      <Content onSubmit={onSubmit} />
    </RichTextEditor>
  );
}

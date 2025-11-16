import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import { extensions } from '~/lib/editor';
import { Content } from './Content';
import styles from './Editor.module.css';
import { Toolbar } from './Toolbar';

export function Editor() {
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
      <Content />
    </RichTextEditor>
  );
}

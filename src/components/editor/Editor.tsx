import { RichTextEditor, type RichTextEditorProps } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import { extensions } from '~/lib/editor';
import { Content } from './Content';
import { Toolbar } from './Toolbar';

export const Editor = (props: {
  classNames: RichTextEditorProps['classNames'];
}) => {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions,
  });

  return (
    <RichTextEditor
      editor={editor}
      variant="subtle"
      classNames={props.classNames}
    >
      <Toolbar />
      <Content />
    </RichTextEditor>
  );
};

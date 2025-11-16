import { renderToHTMLString } from '@tiptap/static-renderer';
import { extensions } from './extensions';
import styles from './MessageItem.module.css';
import type { Message } from './types';

export const MessageItem = (props: { message: Message }) => {
  const { message } = props;

  const html = renderToHTMLString({
    extensions,
    content: message.content,
  });

  return (
    <div
      className={`mantine-RichTextEditor-Typography mantine-RichTextEditor-content ${styles.messageItem}`} // Same class Tiptap uses!
      // biome-ignore lint/security/noDangerouslySetInnerHtml: it's ok
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

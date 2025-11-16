import { renderToHTMLString } from '@tiptap/static-renderer';
import { extensions } from '~/lib/editor';
import type { Message } from '~/types/message';
import styles from './MessageItem.module.css';

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

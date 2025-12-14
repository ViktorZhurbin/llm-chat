import { Link } from "@mantine/tiptap";
// import { HardBreak } from '@tiptap/extension-hard-break';
// import { OrderedList } from '@tiptap/extension-list';
import Placeholder from "@tiptap/extension-placeholder";
import { Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// const CustomHardBreak = HardBreak.extend({
//   addKeyboardShortcuts() {
//     return {
//       'Shift-Enter': () => true,
//     };
//   },
// });

// const CustomOrderedList = OrderedList.extend({
//   addKeyboardShortcuts() {
//     return {
//       'Shift-Enter': () => {
//         this.editor.commands.splitBlock();
//         return true;
//       },
//     };
//   },
// });

const CustomEnterBehavior = Extension.create({
	name: "customEnterBehavior",

	addKeyboardShortcuts() {
		return {
			// Override the default Enter key behavior
			Enter: () => true,

			// Or use Shift+Enter for splitting blocks instead
			"Shift-Enter": () => {
				// console.log('here');
				// console.log(this);
				return this.editor.commands.splitBlock();
			},

			// You might want to explicitly handle Mod+Enter differently
			"Mod-Enter": () => {
				// Your custom behavior here
				return this.editor.commands.splitBlock();
			},
		};
	},
});

export const extensions = [
	StarterKit.configure({
		link: false,

		hardBreak: false,
		orderedList: false,
		bulletList: false,
		blockquote: false,
		heading: false,
	}),
	Placeholder.configure({ placeholder: "Write a message" }),
	Link,
	// CustomHardBreak,
	// CustomOrderedList,
	CustomEnterBehavior,
];

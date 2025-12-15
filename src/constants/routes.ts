const Paths = {
	Root: "/",

	Docs: "/docs",
	Chat: "/chat",

	Signin: "/signin",
};

const Routes = {
	ROOT: Paths.Root,

	DOCS_HOME: Paths.Docs,
	DOC: `${Paths.Docs}/:docId`,

	CHAT: Paths.Chat,

	SIGN_IN: Paths.Signin,
} as const;

export { Paths, Routes };

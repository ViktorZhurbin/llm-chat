import { id } from "@instantdb/react";
import { db } from "~/lib/db";
import type { DocType } from "~/types/doc";

export const DocsApi = {
	create(content: DocType["content"]) {
		db.transact(
			db.tx.docs[id()].update({
				id: id(),
				content,
				createdAt: Date.now(),
			}),
		);
	},

	updateField(params: { id: DocType["id"]; payload: DocType["content"] }) {
		const { id, payload } = params;

		db.transact(db.tx.docs[id].update({ content: payload }));
	},
};

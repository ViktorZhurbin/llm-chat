import { Paths } from "~/constants/routes";

type DocPathParams = {
	id: string;
};

const RouteUtils = {
	getDocPath(params: DocPathParams) {
		return `${Paths.Docs}/${params.id}`;
	},
};

export { RouteUtils };

export type { DocPathParams };

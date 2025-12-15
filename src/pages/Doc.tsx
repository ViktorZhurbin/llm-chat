import { useParams } from "wouter";
import { DocEditor } from "~/components/domain/docs/DocEditor";
import { CenteredError } from "~/components/layout/CenteredError";
import { CenteredLoader } from "~/components/layout/CenteredLoader";
import { db } from "~/lib/db";
import type { DocPathParams } from "~/lib/routes";

export const Doc = () => {
	const { id } = useParams<DocPathParams>();

	const { data, isLoading, error } = db.useQuery({
		docs: {
			$: { where: { id } },
		},
	});

	if (isLoading) {
		return <CenteredLoader />;
	}

	if (error) {
		return <CenteredError message={error.message} />;
	}

	return <DocEditor doc={data.docs[0]} />;
};

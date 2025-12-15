import { Group, Stack } from "@mantine/core";
import { DocsListItem } from "~/components/domain/docs/DocsListItem";
import { CenteredError } from "~/components/layout/CenteredError";
import { CenteredLoader } from "~/components/layout/CenteredLoader";
import { db } from "~/lib/db";

export const DocsHome = () => {
	const { isLoading, error, data } = db.useQuery({ docs: {} });

	if (isLoading) {
		return <CenteredLoader />;
	}

	if (error) {
		return <CenteredError message={error.message} />;
	}

	const { docs } = data;

	return (
		<Stack h="100%">
			<Group gap={8}>
				{docs.map((doc) => (
					<DocsListItem key={doc.id} doc={doc} />
				))}
			</Group>
		</Stack>
	);
};

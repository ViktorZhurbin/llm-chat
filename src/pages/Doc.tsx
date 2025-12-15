import { Container, Loader, Typography } from "@mantine/core";
import { useParams } from "wouter";
import { DocEditor } from "~/components/domain/docs/DocEditor";
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
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			<Typography style={{ color: "var(--mantine-color-error)" }}>
				Error: {error.message}
			</Typography>
		);
	}

	return <DocEditor doc={data.docs[0]} />;
};

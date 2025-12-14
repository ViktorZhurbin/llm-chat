import { Container, Group, Loader, Typography } from "@mantine/core";
import { db } from "~/lib/db";
import { DocsListItem } from "./DocsListItem";

export const DocsList = () => {
	const { isLoading, error, data } = db.useQuery({ docs: {} });

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

	const { docs } = data;

	return (
		<Group gap={8}>
			{docs.map((doc) => (
				<DocsListItem key={doc.id} doc={doc} />
			))}
		</Group>
	);
};

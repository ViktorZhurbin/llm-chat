import { Redirect } from "wouter";
import { Routes } from "~/constants/routes";

export const Root = () => {
	return <Redirect to={Routes.DOCS_HOME} />;
};

import { DocsContainer } from "./components/DocsContainer";

export const parameters = {
	actions: { argTypesRegex: "^on.*" },
	controls: {
		expanded: true,
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		inlineStories: true,
		container: DocsContainer,
	},
	layout: "centered",
	previewTabs: { "storybook/docs/panel": { index: -1 } },
	darkMode: {
		classTarget: "html",
		stylePreview: true,
	},
};

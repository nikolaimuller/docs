import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

import ButtonDocs from "./Button.docs.mdx";

export default ({
	title: "Components/Button",
	component: Button,
	args: {
		children: "Button",
		disabled: false,
		size: Button.Size.Medium,
		onClick: action("Clicked"),
	},
	parameters: {
		docs: {
			page: ButtonDocs,
		},
	},
} as ComponentMeta<typeof Button>);

export const Primary: ComponentStory<typeof Button> = (args) => {
	return <Button {...args} />;
};

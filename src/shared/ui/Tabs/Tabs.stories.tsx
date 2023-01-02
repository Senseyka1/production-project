import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Tabs } from "./Tabs";
import { action } from "@storybook/addon-actions";

export default {
	title: "shared/Tabs",
	component: Tabs,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	tabs: [
		{
			value: "tab1",
			content: "tab1",
		},
		{
			value: "tab2",
			content: "tab2",
		},
		{
			value: "tab3",
			content: "tab3",
		},
	],
	value: "tab2",
	onTabClick: action("onTabClick"),
};

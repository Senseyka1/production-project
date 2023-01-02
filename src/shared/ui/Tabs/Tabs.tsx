import React, { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Card, CardTheme } from "../Card/Card";
import cls from "./Tabs.module.scss";

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
	const { tabs, value, onTabClick, className } = props;

	const clickHandle = useCallback(
		(tabValue) => {
			onTabClick(tabValue);
		},
		[onTabClick]
	);

	return (
		<div className={cls.tabs}>
			{tabs.map((tab) => (
				<Card
					className={classNames(cls.tab, {}, [className])}
					key={tab.value}
					onClick={() => clickHandle(tab.value)}
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
				>
					{tab.content}
				</Card>
			))}
		</div>
	);
});

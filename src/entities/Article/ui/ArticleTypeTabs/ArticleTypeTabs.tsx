import { Article, ArticleType } from "entities/Article/model/types/article";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const { value, onChangeType, className } = props;
	const { t } = useTranslation();

	const onTabClick = useCallback(
		(newType: TabItem) => {
			onChangeType(newType as unknown as ArticleType);
		},
		[onChangeType]
	);

	const typeTabs = useMemo<TabItem[]>(
		() => [
			{
				value: ArticleType.ALL,
				content: t("Все статьи"),
			},
			{
				value: ArticleType.IT,
				content: t("Айти"),
			},
			{
				value: ArticleType.ECONOMICS,
				content: t("Економика"),
			},
			{
				value: ArticleType.SCIENCE,
				content: t("Наука"),
			},
		],
		[t]
	);

	return (
		<Tabs
			tabs={typeTabs}
			onTabClick={onTabClick}
			value={value}
			className={classNames("", {}, [className])}
		/>
	);
});

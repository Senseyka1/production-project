import React, { memo, useCallback, useMemo } from "react";
import { t } from "i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { sort, order, onChangeOrder, onChangeSort } = props;
	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
		() => [
			{
				value: "asc",
				content: t("возростанию"),
			},
			{
				value: "desc",
				content: t("убыванию"),
			},
		],
		[t]
	);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t("дата создания"),
			},
			{
				value: ArticleSortField.TITLE,
				content: t("названию"),
			},
			{
				value: ArticleSortField.VIEWS,
				content: t("просмотрам"),
			},
		],
		[t]
	);

	return (
		<div className={cls.articleSortSelector}>
			<Select
				label={t("Сортировать по")}
				options={sortFieldOptions}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				label={t("по")}
				options={orderOptions}
				value={order}
				onChange={onChangeOrder}
				className={cls.order}
			/>
		</div>
	);
});

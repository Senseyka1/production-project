import { t } from "i18next";
import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/Page";

const ArticleEditPage = () => {
	const { id } = useParams<{ id: string }>();
	const isEdit = Boolean(id);

	return (
		<Page>{isEdit ? t("Редактирование статье с ID = ") + id : t("Создание новой статьи")}</Page>
	);
};

export default ArticleEditPage;

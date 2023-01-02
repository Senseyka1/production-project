import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getCanEditArticle } from "pages/ArticleDetailsPage/model/selectors/article";

import cls from "./ArticleDetailsPageHeader.module.scss";
import { useSelector } from "react-redux";

const ArticleDetailsPageHeader = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const article = useSelector(getArticleDetailsData);

	const canEdit = useSelector(getCanEditArticle);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.articles}${article?.id}/edit`);
	}, [navigate, article?.id]);

	return (
		<div className={cls.articleDetailsPageHeader}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
				{t("Назад к списку")}
			</Button>
			{canEdit && (
				<Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
					{t("Редактировать")}
				</Button>
			)}
		</div>
	);
};

export default ArticleDetailsPageHeader;

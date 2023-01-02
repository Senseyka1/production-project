import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams";
import {
	getArticlesPageSearch,
	getArticlesPageOrder,
	getArticlesPageSort,
	getArticlesPageNum,
	getArticlesPageType,
} from "./../../selectors/articlesPageSelectors";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { Article, ArticleType } from "entities/Article";
import { getArticlesPageLimit } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";

interface FetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
	Article[],
	FetchArticlesListProps,
	ThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
	const { extra, rejectWithValue, getState } = thunkApi;

	const limit = getArticlesPageLimit(getState());
	const search = getArticlesPageSearch(getState());
	const order = getArticlesPageOrder(getState());
	const sort = getArticlesPageSort(getState());
	const page = getArticlesPageNum(getState());
	const type = getArticlesPageType(getState());

	try {
		addQueryParams({ sort, order, search, type });
		const response = await extra.api.get<Article[]>("/articles", {
			params: {
				_expand: "user",
				_limit: limit,
				_page: page,
				_sort: sort,
				_order: order,
				q: search,
				type: type === ArticleType.ALL ? undefined : type,
			},
		});

		if (!response.data) {
			throw new Error();
		}

		return response.data;
	} catch (e) {
		return rejectWithValue("error");
	}
});

export const getQueryParams = (params: OptionalRecord<string, string>) => {
	const searchParams = new URLSearchParams(window.location.search);

	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined) {
			searchParams.set(name, value);
		}
	});
	return `?${searchParams.toString()}`;
};

// Функция добавление параметров в строке запросе
export const addQueryParams = (params: OptionalRecord<string, string>) => {
	window.history.pushState(null, "", getQueryParams(params));
};

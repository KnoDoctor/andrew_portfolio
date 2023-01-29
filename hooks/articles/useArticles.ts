import useSWR from "swr";

async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
	const res = await fetch(input, init);
	return res.json();
}

export default function useArticles() {
	const { data, error, mutate }: any = useSWR(`/api/articles`, fetcher);

	return {
		data,
		isLoading: !error && !data,
		error,
		mutate,
	};
}

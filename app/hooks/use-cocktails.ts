import useSWR from "swr";
import { Cocktail } from "@/app/types/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useCocktails(initialData?: Cocktail[]) {
	return useSWR<Cocktail[]>("/api/cocktails", fetcher, {
		fallbackData: initialData,
		revalidateOnFocus: true,
		revalidateOnReconnect: true,
		dedupingInterval: 5000,
	});
}

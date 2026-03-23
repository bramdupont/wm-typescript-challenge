import { Cocktail } from "@/app/types/types";
import PageClient from "./page.client";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const fetchPopularCocktails = async () => {
	const cocktails: Cocktail[] = await fetch(`${BASE_URL}/api/cocktails`).then(
		(res) => res.json(),
	);
	return cocktails.sort((a, b) => b.views - a.views).slice(0, 5);
};

export default async function Home() {
	const cocktails = await fetchPopularCocktails();
	return <PageClient cocktails={cocktails} />;
}

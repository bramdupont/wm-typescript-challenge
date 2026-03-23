import PageClient from "@/app/recipes/page.client";
import { Cocktail } from "@/app/types/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const fetchCocktails = async () => {
	const cocktails: Cocktail[] = await fetch(`${BASE_URL}/api/cocktails`).then(
		(res) => res.json(),
	);
	return cocktails.sort((a, b) => b.views - a.views);
};

export default async function RecipePage() {
	const cocktails = await fetchCocktails();
	return <PageClient cocktails={cocktails} />;
}

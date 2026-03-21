import PageClient from "@/app/recipes/page.client";
import { Cocktail } from "@/app/types/types";

const fetchCocktails = async () => {
	"use server";
	const cocktails = await fetch("http://localhost:3000/api/cocktails").then(
		(res) => res.json(),
	);
	return cocktails.sort((a: Cocktail, b: Cocktail) => b.views - a.views);
};

export default async function RecipePage() {
	const cocktails = await fetchCocktails();
	return <PageClient cocktails={cocktails} />;
}

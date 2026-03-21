import { Cocktail } from "@/app/types/types";
import PageClient from "./page.client";

const fetchPopularCocktails = async () => {
	"use server";
	const cocktails = await fetch("http://localhost:3000/api/cocktails").then(
		(res) => res.json(),
	);
	return cocktails
		.sort((a: Cocktail, b: Cocktail) => b.views - a.views)
		.slice(0, 5);
};

export default async function Home() {
	const cocktails = await fetchPopularCocktails();
	return <PageClient cocktails={cocktails} />;
}

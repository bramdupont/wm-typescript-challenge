import Fuse from "fuse.js";
import cocktails from "../cocktails.json";
import { Cocktail } from "@/app/types/types";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const query = searchParams.get("q");

	if (!query || !query.trim()) {
		return new Response(JSON.stringify(cocktails));
	}

	const fuse = new Fuse(cocktails, {
		keys: ["name"],
		threshold: 0.4,
		minMatchCharLength: 1,
	});

	const results = fuse.search(query);
	const filteredCocktails = results.map((result) => result.item as Cocktail);

	return new Response(JSON.stringify(filteredCocktails));
}

import Fuse from "fuse.js";
import { Cocktail } from "@/app/types/types";

export function filterCocktailsByName(
	cocktails: Cocktail[],
	searchTerm: string,
): Cocktail[] {
	if (!searchTerm.trim()) return cocktails;

	const fuse = new Fuse(cocktails, {
		keys: ["name"],
		threshold: 0.4,
		minMatchCharLength: 1,
	});

	const results = fuse.search(searchTerm);
	return results.map((result) => result.item);
}

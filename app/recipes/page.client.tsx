"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/app/components/card";
import { useCocktails } from "@/app/hooks/use-cocktails";
import { useDebounce } from "@/app/hooks/use-debounce";
import { filterCocktailsByName } from "@/app/lib/search-cocktails";
import Loading from "@/app/recipes/loading";
import { Cocktail } from "@/app/types/types";
import { Combobox, ComboboxOption, ComboboxOptions } from "@headlessui/react";

export default function PageClient({
	cocktails: initialCocktails,
}: {
	cocktails: Cocktail[];
}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const debouncedSearch = useDebounce(searchTerm, 300);
	const searchInputRef = useRef<HTMLInputElement>(null);

	const {
		data: cocktails,
		isLoading,
	} = useCocktails(initialCocktails);

	const showLoading = isLoading && !initialCocktails?.length;

	const filteredCocktails = useMemo(
		() => filterCocktailsByName(cocktails || [], debouncedSearch),
		[cocktails, debouncedSearch],
	);

	const suggestions = useMemo(() => {
		if (!searchTerm.trim() || !cocktails) return [];
		return filterCocktailsByName(cocktails, searchTerm).slice(0, 5);
	}, [searchTerm, cocktails]);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				searchInputRef.current &&
				!searchInputRef.current.contains(e.target as Node)
			) {
				setShowSuggestions(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleClearSearch = () => {
		setSearchTerm("");
		searchInputRef.current?.focus();
	};

	return (
		<main>
			<div className="flex justify-between items-center">
				<h1 className="font-bold text-2xl">Our cocktails</h1>
				<div className="relative w-[400px]">
					<form
						className="flex items-center gap-2 bg-white border px-2 rounded"
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							ref={searchInputRef}
							type="search"
							placeholder="Search cocktails..."
							className="w-full p-2 outline-none [&::-webkit-search-cancel-button]:hidden"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setShowSuggestions(true);
							}}
							onFocus={() => searchTerm && setShowSuggestions(true)}
							aria-label="Search cocktails by name"
							autoComplete="off"
						/>
						{searchTerm && (
							<button
								type="button"
								onClick={handleClearSearch}
								className="p-2 hover:bg-gray-100 rounded transition-colors"
								aria-label="Clear search"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							</button>
						)}
						<button
							type="submit"
							className="my-1 p-2 hover:bg-gray-100 rounded transition-colors"
							aria-label="Search"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</button>
					</form>

					{showSuggestions && suggestions.length > 0 && (
						<Combobox
							as="div"
							onChange={(cocktail: Cocktail | null) => {
								if (cocktail) {
									setSearchTerm(cocktail.name);
									setShowSuggestions(false);
									searchInputRef.current?.focus();
								}
							}}
						>
							<ComboboxOptions
								static
								className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base outline -outline-offset-1 outline-white/10 sm:text-sm"
							>
								{suggestions.map((cocktail) => (
									<ComboboxOption
										key={cocktail.name}
										value={cocktail}
										className="cursor-default px-3 py-2 text-gray-800 select-none data-focus:bg-indigo-500 data-focus:text-white data-focus:outline-hidden"
									>
										<span className="text-sm font-medium">
											{cocktail.name}
										</span>
										<span className="ml-2 text-xs text-gray-500">
											{cocktail.category}
										</span>
									</ComboboxOption>
								))}
							</ComboboxOptions>
						</Combobox>
					)}
				</div>
			</div>

			{showLoading && <Loading />}

			{!showLoading && filteredCocktails.length === 0 && searchTerm && (
				<p className="mt-8 text-center text-gray-500">
					No cocktails found for &quot;{searchTerm}&quot;
				</p>
			)}

			<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
				{filteredCocktails.map((cocktail) => (
					<Card key={cocktail.name} cardData={cocktail} />
				))}
			</div>
		</main>
	);
}

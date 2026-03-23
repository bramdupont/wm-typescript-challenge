import type { Cocktail } from "@/app/types/types";

export const CocktailDetails = ({
	cocktail,
	headingId,
}: {
	cocktail: Cocktail;
	headingId?: string;
}) => {
	const { name, glass, category, ingredients, garnish, preparation } = cocktail;

	return (
		<div className="space-y-4">
			<div>
				{name && (
					<h2 id={headingId} className="text-2xl font-bold">
						{name}
					</h2>
				)}
				{category && (
					<span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600 last:mr-0">
						{category}
					</span>
				)}
			</div>
			{glass && (
				<div>
					<h3 className="text-lg font-bold">Glass</h3>
					<p>{glass}</p>
				</div>
			)}
			{ingredients.length > 0 && (
				<div className="space-y-2">
					<h3 className="text-lg font-bold">Ingredients</h3>
					<ul className="list-inside list-disc px-1 text-sm">
						{ingredients.map((ingredient, index) => (
							<li key={index}>
								{ingredient.ingredient
									? `${ingredient.amount}${ingredient.unit} ${ingredient.ingredient}`
									: ingredient.special}
							</li>
						))}
					</ul>
				</div>
			)}
			{garnish && (
				<div>
					<h3 className="text-lg font-bold">Garnish</h3>
					<p>{garnish}</p>
				</div>
			)}
			{preparation && (
				<div>
					<h3 className="text-lg font-bold">Preparation</h3>
					<div className="text-sm">{preparation}</div>
				</div>
			)}
		</div>
	);
};

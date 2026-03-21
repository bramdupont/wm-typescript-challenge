export type Cocktail = {
	name: string;
	glass: string;
	category: string;
	ingredients: Ingredient[];
	garnish: string;
	preparation: string;
	views: number;
};

export type Ingredient = {
	unit: string;
	amount: number;
	ingredient: string;
	special?: string;
};

type Cocktail = {
	name: string;
	glass: string;
	category: string;
	ingredients: Ingredient[];
	garnish: string;
	preparation: string;
};

type Ingredient = {
	unit: string;
	amount: number;
	ingredient: string;
};

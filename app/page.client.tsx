import { Card } from "@/app/components/card";
import { Cocktail } from "@/app/types/types";
export default function Home({ cocktails }: { cocktails: Cocktail[] }) {
	return (
		<main>
			<h1 className="font-bold text-2xl">Our most popular cocktails</h1>
			<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
				{cocktails?.map((cocktail) => (
					<Card key={cocktail.name} cardData={cocktail} />
				))}
			</div>
		</main>
	);
}

import { Suspense } from "react";
import { Card } from "@/app/components/card";
import Loading from "@/app/recipes/loading";
import { Cocktail } from "@/app/types/types";

export default async function PageClient({
	cocktails,
}: {
	cocktails: Cocktail[];
}) {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<h1 className="font-bold text-2xl">Our cocktails</h1>
				<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
					{cocktails?.map((cocktail) => (
						<Card key={cocktail.name} cardData={cocktail} />
					))}
				</div>
			</main>
		</Suspense>
	);
}

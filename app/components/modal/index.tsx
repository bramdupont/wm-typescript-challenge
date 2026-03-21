import Link from "next/link";
import type { Cocktail } from "@/app/types/types";

export const Modal = ({
	card,
	open,
	setOpen,
}: {
	card: Cocktail;
	open: boolean;
	setOpen: (open: boolean) => void;
}) => {
	const { name, glass, category, ingredients, garnish, preparation } = card;

	return (
		<div
			className={`${open ? "flex" : "hidden"} items-center justify-center absolute top-0 left-0 w-full h-full bg-black/80`}
		>
			<div className="bg-white p-8 pt-12 rounded-lg text-left space-y-6 shadow-lg w-full max-w-md relative">
				<Link
					className="inline-block absolute top-0 right-0 rounded-md bg-indigo-500/20 px-3.5 py-2.5 text-sm font-semibold text-indigo-400 hover:bg-indigo-500/30"
					href="/"
					onClick={() => setOpen(false)}
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
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				</Link>
				<div>
					{name && <h2 className="text-2xl font-bold">{name}</h2>}
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
						<div className="list-inside list-disc px-1 text-sm">
							{ingredients.map((ingredient, index) => (
								<ul key={index} className="list-inside list-disc px-1 text-sm">
									{ingredient.ingredient && (
										<li>
											{ingredient.amount}
											{ingredient.unit} {ingredient.ingredient}
										</li>
									)}
									{ingredient.special && <li>{ingredient.special}</li>}
								</ul>
							))}
						</div>
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
				<Link
					className="block rounded-md bg-indigo-500/20 text-center px-3.5 py-2.5 text-sm font-semibold text-indigo-400 hover:bg-indigo-500/30"
					href="#"
					onClick={() => setOpen(false)}
				>
					Done
				</Link>
			</div>
		</div>
	);
};

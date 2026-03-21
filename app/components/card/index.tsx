"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/app/components/modal";
import type { Cocktail } from "@/app/types/types";

export const Card = ({ cardData }: { cardData: Cocktail }) => {
	const { name, glass, category, ingredients, garnish, preparation } = cardData;
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="flex flex-col justify-between border border-gray-200 bg-white/50 p-4 md:min-h-[500px]">
			<div className="block space-y-4 flex-1">
				{name && <h2 className="text-2xl font-bold">{name}</h2>}
				{category && (
					<span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600 last:mr-0">
						{category}
					</span>
				)}
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
			</div>
			<div className="flex-2 text-center pt-4">
				<Link
					className="block rounded-md bg-indigo-500/20 px-3.5 py-2.5 text-sm font-semibold text-indigo-400 hover:bg-indigo-500/30"
					href="#"
					onClick={() => setOpenModal(true)}
				>
					Make this drink
				</Link>
				<Modal card={cardData} open={openModal} setOpen={setOpenModal} />
			</div>
		</div>
	);
};

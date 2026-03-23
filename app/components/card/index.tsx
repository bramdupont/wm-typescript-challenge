"use client";
import { useState } from "react";
import { Modal } from "@/app/components/modal";
import { CocktailDetails } from "@/app/components/cocktail-details";
import type { Cocktail } from "@/app/types/types";

export const Card = ({ cardData }: { cardData: Cocktail }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<div className="flex flex-col justify-between border border-gray-200 bg-white/50 p-4 md:min-h-[500px]">
			<div className="block flex-1">
				<CocktailDetails cocktail={cardData} headingId="modal-title" />
			</div>
			<div className="flex-2 text-center pt-4">
				<button
					type="button"
					className="block w-full rounded-md bg-indigo-500/20 px-3.5 py-2.5 text-sm font-semibold text-indigo-400 hover:bg-indigo-500/30"
					onClick={() => setOpenModal(true)}
				>
					Make this drink
				</button>
				<Modal card={cardData} open={openModal} setOpen={setOpenModal} />
			</div>
		</div>
	);
};

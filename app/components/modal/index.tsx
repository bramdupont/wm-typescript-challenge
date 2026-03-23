import type { Cocktail } from "@/app/types/types";
import { CocktailDetails } from "@/app/components/cocktail-details";
import { CloseButton, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";


export const Modal = ({
	card,
	open,
	setOpen,
}: {
	card: Cocktail;
	open: boolean;
	setOpen: (open: boolean) => void;
}) => {

	return (
		<Dialog open={open} onClose={setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
			/>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
					>
						<CloseButton className="absolute top-0 right-0 rounded-md bg-indigo-500/20 p-2.5 text-indigo-400 hover:bg-indigo-500/30">
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
						</CloseButton>
						<CocktailDetails cocktail={card} />
						<div className="mt-5 sm:mt-6">
							<button
								type="button"
								onClick={() => setOpen(false)}
								className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Done
							</button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

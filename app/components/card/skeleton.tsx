export const LoadingSkeleton = () => {
	return (
		<div>
			<h1 className="font-bold text-2xl">Our cocktails</h1>
			<div className="my-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-8">
				<div className="flex p-4 bg-white md:min-h-[500px]">
					<div className="animate-pulse flex flex-col space-y-4">
						<div className="h-6 w-[200px] rounded bg-gray-200"></div>
						<div className="h-4 w-[200px]  rounded bg-pink-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
					</div>
				</div>
				<div className="flex p-4 bg-white md:min-h-[500px]">
					<div className="animate-pulse flex flex-col space-y-4">
						<div className="h-6 w-[200px] rounded bg-gray-200"></div>
						<div className="h-4 w-[200px]  rounded bg-pink-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
					</div>
				</div>
				<div className="flex p-4 bg-white md:min-h-[500px]">
					<div className="animate-pulse flex flex-col space-y-4">
						<div className="h-6 w-[200px] rounded bg-gray-200"></div>
						<div className="h-4 w-[200px]  rounded bg-pink-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
						<div className="h-2 w-[200px]  rounded bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

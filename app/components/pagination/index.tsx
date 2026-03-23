"use client";

export const Pagination: React.FC<{
  page: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
}> = ({ page, totalItems, itemsPerPage, onPageChange, startIndex, endIndex }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if(startIndex === 0) startIndex = 1;
  if(endIndex > totalItems) endIndex = totalItems;

  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between border-t border-black/10 py-4"
    >
      <div className="mt-4 md:mt-0">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{startIndex}</span> to <span className="font-medium">{endIndex}</span> of{' '}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={!hasPrevPage}
          onClick={() => {
            onPageChange(page - 1);
          }}
          className={`${!hasPrevPage ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "text-gray-600"} relative inline-flex items-center rounded-md bg-black/10 px-3 py-2 text-sm font-semibold  inset-ring inset-ring-white/5 hover:bg-black/20"`}
        >
          Previous
        </button>
        <button
          disabled={!hasNextPage}
          onClick={() => {
            onPageChange(page + 1);
          }}
          className={`${!hasNextPage ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "text-gray-600"} relative ml-3 inline-flex items-center rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-gray-600 inset-ring inset-ring-white/5 hover:bg-black/20`}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

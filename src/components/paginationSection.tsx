import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export default function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
  page
}: {
  totalPosts: any
  postsPerPage: any
  currentPage: any
  setCurrentPage: any
  page?: string
}) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const maxPageNum = 5 // Maximum page numbers to display at once
  const pageNumLimit = Math.floor(maxPageNum / 2) // Current page should be in the middle if possible

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  )

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={
          currentPage === page ? 'bg-contrast text-zinc-100 rounded-md' : ''
        }
      >
        <PaginationLink className="w-8 h-8 flex items-center justify-center text-xs" onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ))

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      )
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      )
    }

    return renderedPages
  }

  return (
    <>
      {/* Page for */}
      {page == 'class' ? (
        <Pagination className="py-2 border-t border-primary bg-transparent backdrop-blur-[200px] cursor-pointer">
          <PaginationContent>
            <PaginationItem className="bg-primary shadow-m rounded-md text-zinc-50">
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {renderPages()}

            <PaginationItem className="bg-primary shadow-md rounded-md text-zinc-50">
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : (
        <Pagination className="mt-2 p-1 border border-primary bg-transparent backdrop-blur-[200px] cursor-pointer rounded-md">
          <PaginationContent>
            <PaginationItem className="bg-primary shadow-m rounded-md text-zinc-50">
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {renderPages()}

            <PaginationItem className="bg-primary shadow-md rounded-md text-zinc-50">
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}

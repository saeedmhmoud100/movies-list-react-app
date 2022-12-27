import React from "react";
import ReactPaginate from "react-paginate";

function MyPagination({ getPage, total_pages }) {
  const handlePageClick = (page) => {
    getPage(page.selected + 1);
  };
  const pageCount = total_pages;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination justify-content-center p-3 "
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link disabled"
        activeClassName="active"
      />
    </>
  );
}

export default MyPagination;

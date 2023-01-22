import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

function MyPagination() {
  const [pages, setpages] = useState(0);
  const dispatch = useDispatch();
  const Pages = useSelector((state) => state.pages);
  const Page = useSelector((state) => state.page);
  const search_val = useSelector((state) => state.search_val);

  useEffect(() => {
    setpages(Pages);
  }, [Pages]);

  const handlePageClick = (page) => {
    dispatch(getPage(page.selected + 1, Pages, search_val));
  };


  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pages}
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
        forcePage={Page - 1}
      />
    </>
  );
}

export default MyPagination;

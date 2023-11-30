/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
// import Select from "react-select";
import "./style.scss";
function TablePagination({
  meta: { per_page, total, current_page },
  page,
  setPage,
  tableName = "",
  textColor,
}) {
  const [rowPerPage, setRowPerPage] = useState(10);
  const options = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 30, label: "30" },
  ];

  // useEffect(() => {
  //   console.log(rowPerPage);
  // });

  const handleOption = (val) => {
    setRowPerPage(val.value);
  };

  return (
    <>
      <div className={`pagination-wrap ${textColor || 'text-[#53536f]'} gap-4`}>
        <p>
          Showing {page} - {per_page} of {total} <span>{tableName}</span>
        </p>
        <div className="">
          {/* <select
            className="pagination__select"
            onChange={(event) => setRowPerPage(event.target.value)}
            value={rowPerPage}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select> */}

          {/* <Select
            menuPlacement="auto"
            isSearchable={false}
            defaultValue={options[0]}
            className="pagination__wrap"
            classNamePrefix="select__deev"
            onChange={handleOption}
            name="rowPerPage"
            options={options}
          /> */}
        </div>
        <Pagination
          color="primary"
          count={Math.ceil(total / per_page)}
          defaultPage={current_page}
          page={page}
          onChange={(e, val) => setPage((prev) => (prev = val))}
          variant="text"
          shape="rounded"
          siblingCount={0}
        />
      </div>
    </>
  );
}

export default TablePagination;

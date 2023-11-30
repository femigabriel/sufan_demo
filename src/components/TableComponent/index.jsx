/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import LoadingTable from "../loadingTable";
import ErrorMsg from "../ErrorMsg";
import TablePagination from "../TablePagination";
import { IconButton, TableHead } from "@mui/material";
import DropDownWrapper from "../DropDownWrapper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmptyResponse from "../EmptyResponse";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import { useRef } from "react";
const headCellTest = [
  {
    key: "name",
    name: "Full Name",
  },
  {
    key: "email",
    name: "Email Address",
  },
  {
    key: "number",
    name: "Phone Number",
  },
  {
    key: "links",
    name: "Links created",
  },
  {
    key: "date",
    name: "Date joined",
  },
];

export default function TableComponent({
  tableName,
  tableData = Array(7)
    .fill("")
    .map((_, i) => ({
      name: "Jacob Jones",
      number: "(405) 555-0128",
      email: "deanna.curtis@example.com",
      role: "01/01/2020",
      action: "h",
      id: `row_${i}`,
    })),
  isLoading,
  isError,
  error,
  headCells = headCellTest,
  isPage = false,
  pagination = {
    per_page: 10,
    total: 50,
    current_page: 1,
  },
  page,
  setPage,
  scrollX = true,
  scrollY = false,
  maxHeight = "350px",
  alignLastTdRight = true,
  borderBottom = true,
  minWidth = "1000px",
  emptyData = {
    message: "No record found",
    extraText: "",
    icon: <FolderOffIcon />,
  },
  hideScrollbar,
  ...props
}) {
  const tableRef = useRef(null);

  if (isLoading) {
    return <LoadingTable />;
  }
  if (isError) {
    return <ErrorMsg error={error} />;
  }
  return (
    <Box sx={{ width: "100%", mt: 2, overflow: scrollY ? "hidden" : "auto" }}>
      <TableContainer
        ref={tableRef}
        className={`${hideScrollbar ? "noScrollBar" : "scrollbar-style "} my-table2`}
        sx={{ maxHeight: scrollY ? maxHeight : "unset" }}
      >
        {tableData.length <= 0 ? (
          <EmptyResponse {...emptyData} />
        ) : (
          <Table
            // checkboxSelection
            {...props}
            sx={{ minWidth: scrollX ? minWidth : "unset" }}
            aria-labelledby="tableTitle"
          >
            <TableHead
              className="rounded-xl"
              sx={{
                "& th:first-of-type": {
                  borderRadius: "10px 0 0 10px",
                },
                "& th:last-of-type": {
                  borderRadius: "0 10px 10px 0",
                  textAlign: alignLastTdRight ? "right" : "left",
                },
                "& th": {
                  border: "none",
                },
              }}
            >
              <TableRow hover={false}>
                {headCells.map((headCell, i) => (
                  <TableCell
                    className="uppercase truncate"
                    key={headCell.key}
                    align={"left"}
                    sx={{ py: 1.5, backgroundColor: "transparent !important" }}
                    padding={"normal"}
                  >
                    {headCell.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => {
                  return (
                    <TableRow
                      sx={{
                        "& td": {
                          borderBottomWidth: borderBottom ? "1px" : 0,
                          "&:last-child": {
                            textAlign: alignLastTdRight ? "right" : "left",
                          },
                        },
                      }}
                      hover
                      tabIndex={-1}
                      key={`table-row-${rowIndex}`}
                    >
                      {headCells
                        .filter(col => col.key !== "actions")
                        .map((col, colIndex) => (
                          <TableCell
                            className={`${colIndex === 0 ? "pd-checkbox" : ""
                              } ${col.key === "action" ? "td-checkbox" : ""
                              } truncate`}
                            sx={{ fontWeight: 500 }}
                            align="left"
                            key={`-row_${rowIndex}-col_${colIndex}`}
                          >
                            {row[col.key]}
                          </TableCell>
                        ))}

                      {row?.actions && (
                        <TableCell className="td-checkbox">
                          <DropDownWrapper
                            className="more-actions"
                            extraClick={() => {
                              setTimeout(() => {
                                tableRef.current.scroll({
                                  top: tableRef.current.scrollHeight + 500,
                                  left: tableRef.current.scrollWidth + 500,
                                  behavior: "smooth",
                                });
                              }, 300);
                            }}
                            action={
                              <IconButton
                                className="more-action-btn"
                                aria-label="actions"
                              >
                                <MoreHorizIcon />
                              </IconButton>
                            }
                          >
                            {row?.actions}
                          </DropDownWrapper>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {isPage && pagination.total / pagination.per_page > 1 && (
        <TablePagination
          tableName={tableName}
          meta={{ ...pagination }}
          page={page}
          setPage={setPage}
        />
      )}
    </Box>
  );
}

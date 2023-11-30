/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MUIDataTable from "mui-datatables";
import UserDisplay from "./UserDisplay";
import "./style.scss";
import SearchInput from "../forms/SearchInput";
import LoadingTable from "../loadingTable"
import ErrorMsg from "../ErrorMsg";
import { Button, Chip, IconButton, } from "@mui/material";
import DropDownWrapper from "../DropDownWrapper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmptyResponse from "../EmptyResponse";
import QuestionMarkIcon from "../Vectors/QuestionMarkIcon";
import { createElement } from "react";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import TablePagination from "../TablePagination";
// export const filterOption = {
//     options: {
//         filter: true,
//     },
// };

export const useStyles = makeStyles({
    noBackgroundTable: {
        backgroundColor: 'transparent !important', // Set the background color to transparent
    },
});

export const TableDropDown = ({ iconColor, children, tableId, closeDrpDwn }) => (
    <DropDownWrapper
        closeOnBtnClick={closeDrpDwn}
        extraClick={() => {
            setTimeout(() => {
                document.querySelector(`#${tableId} div table`).parentElement.scroll({
                    top: document.querySelector(`#${tableId} div table`).parentElement.scrollHeight + 500,
                    left: document.querySelector(`#${tableId} div table`).parentElement.scrollWidth + 500,
                    behavior: "smooth",
                });
            }, 300);
        }}
        className="more-actions pr-[1rem] "
        action={
            <IconButton className="more-action-btn" aria-label="actions">
                <MoreHorizIcon sx={{ color: iconColor }} />
            </IconButton>
        }
    >
        {children}
    </DropDownWrapper>
);

const mockData = Array(5)
    .fill("")
    .map((_, i) => ({
        name: {
            name: `James Aluko ${i}`,
            email: "email@mail.com",
        },
        number: "(405) 555-0128",
        email: `deanna${i}.curtis@example.com`,
        date: "01/01/2020",
        status: i % 2 === 0 ? "Active" : "Disabled",
        // actions: (
        //     <>
        //         <button>Disable</button>
        //         <button>Enable</button>
        //     </>
        // ),
        id: `row_${i}`,
    }));

const mockHeadCells = [
    {
        name: "name",
        label: "Full Name",
        options: {
            customBodyRender: (value) => <UserDisplay textWhite name={value?.name} email={value?.email} img="" />,
        },
    },
    {
        name: "email",
        label: "Email Address",
    },
    {
        name: "number",
        label: "Phone Number",
    },
    {
        name: "date",
        label: "Date joined",
    },
    {
        name: "status",
        label: "Status",
        options: {
            customBodyRender: (value) => <Chip label={value} color={value === "Active" ? "success" : "error"} />,
        },
    },
    {
        name: "actions",
        label: "Actions",
        options: {
            customBodyRender: (value) => <TableDropDown tableId={"table"}>{value}</TableDropDown>,
        },
    },
];

function MyDataTable({
    headCells = mockHeadCells,
    options,
    page,
    perPage,
    setPage,
    data = mockData,
    title = "",
    alignLastTdRight = false,
    isLoading,
    isError,
    error,
    btnText = 'Select Order',
    btnOnClick,
    searchPlaceholder = "Search...",
    // emptyData = {
    //     icon: QuestionMarkIcon,
    //     message: "No record found",
    // },
    scrollX = true,
    hideScollbar = true,
}) {
    const classes = useStyles()
    if (isLoading) return <LoadingTable />;
    if (isError) return <ErrorMsg error={error} />;
    // if (data.length <= 0)
    //     return (
    //         <div className="flex flex-col min-h-[200px] gap-3 justify-center items-center">
    //             <p className='text-white font-semibold text-2xl'>Oops!</p>
    //             <p className='text-white font-semibold text-lg mb-3'>No Record Found</p>

    //             <Button variant="contained" onClick={btnOnClick} sx={{ background: theme.palette.primary.mainGradient, width: '250px' }}>{btnText}</Button>
    //         </div>
    //     );
    return (
        <>

            {/* DESKTOP TABLE */}
            <div
                id={"table"}
                className={`my-table hidden md:block ${hideScollbar ? "hideScrollbar" : "scrollbar-style"}  ${scrollX ? "scrollX" : ""} ${alignLastTdRight ? "alignLastTdRight" : ""
                    } `}
            >
                <MUIDataTable
                    title={title}
                    data={data}
                    className={classes.noBackgroundTable}
                    columns={headCells.map(({ name, label, showLabel = true, options }) => ({
                        name,
                        label,
                        options: {
                            filter: false,
                            customHeadLabelRender: (column) => (showLabel ? label : ""),
                            ...options,
                        },
                    }))}
                    checkboxSelection
                    options={{
                        download: false,
                        print: false,
                        caseSensitive: true,
                        jumpToPage: false,
                        searchAlwaysOpen: true,
                        selectableRows: "multiple",
                        selectableRowsHeader: true,
                        customSearchRender: (_, handleSearch) => (
                            <div className="md:mb-4">
                                <SearchInput placeholder={searchPlaceholder} onChange={(e) => handleSearch(e.target.value)} className='search bg-[#020718] !text-[#c8c8c8] bg-opacity-[23%] !max-w-[300px] border-2 border-[#15A4FB]/50' />
                            </div>
                        ),
                        customSort: (data, colIndex, order) => {
                            return data.sort((a, b) => {
                                return (a.data[colIndex].length < b.data[colIndex].length ? -1 : 1) * (order === "desc" ? 1 : -1);
                            });
                        },
                        responsive: "standard",
                        elevation: 0,
                        search: false,
                        customSearch: (searchQuery, currentRow) => {
                            let isFound = false;
                            currentRow.forEach((col) => {
                                if (
                                    col?.name?.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
                                    col?.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
                                ) {
                                    isFound = true;
                                }
                            });
                            return isFound;
                        },
                        enableNestedDataAccess: ".",
                        rowsPerPageOptions: [5, 10, 15, 20, 100],
                        // selectableRows: options?.selectableRows ? "multiple" : "none",
                        ...options,
                    }}
                />
            </div>
        </>
    );
}

export default MyDataTable;

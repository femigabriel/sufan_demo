/* eslint-disable no-unused-vars */
import {
  Button,
  IconButton,
  // Chip
} from "@mui/material";
import MyDataTable, { TableDropDown } from "../../../../../components/TableComponent/MyDataTable";
import { MoreHorizOutlined } from "@mui/icons-material";
import SearchInput from "../../../../../components/forms/SearchInput";
import { useGetOrdersQuery } from "../../../../../services/general.api";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import theme from "../../../../../theme";
import { useState } from "react";
import TablePagination from "../../../../../components/TablePagination";
import LoadingTable from "../../../../../components/loadingTable";

const STATUSCOLOR = {
  complete: "text-[#0DDA77]",
  delivered: "text-[#C90DDA]",
  active: "text-[#8287FF]",
  cancelled: "text-[#FB4D4D]",
};

const CalendarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5833 12.8333C15.8264 12.8333 16.0596 12.7368 16.2315 12.5648C16.4034 12.3929 16.5 12.1598 16.5 11.9167C16.5 11.6736 16.4034 11.4404 16.2315 11.2685C16.0596 11.0966 15.8264 11 15.5833 11C15.3402 11 15.1071 11.0966 14.9352 11.2685C14.7632 11.4404 14.6667 11.6736 14.6667 11.9167C14.6667 12.1598 14.7632 12.3929 14.9352 12.5648C15.1071 12.7368 15.3402 12.8333 15.5833 12.8333ZM15.5833 16.5C15.8264 16.5 16.0596 16.4034 16.2315 16.2315C16.4034 16.0596 16.5 15.8264 16.5 15.5833C16.5 15.3402 16.4034 15.1071 16.2315 14.9352C16.0596 14.7632 15.8264 14.6667 15.5833 14.6667C15.3402 14.6667 15.1071 14.7632 14.9352 14.9352C14.7632 15.1071 14.6667 15.3402 14.6667 15.5833C14.6667 15.8264 14.7632 16.0596 14.9352 16.2315C15.1071 16.4034 15.3402 16.5 15.5833 16.5ZM11.9167 11.9167C11.9167 12.1598 11.8201 12.3929 11.6482 12.5648C11.4763 12.7368 11.2431 12.8333 11 12.8333C10.7569 12.8333 10.5237 12.7368 10.3518 12.5648C10.1799 12.3929 10.0833 12.1598 10.0833 11.9167C10.0833 11.6736 10.1799 11.4404 10.3518 11.2685C10.5237 11.0966 10.7569 11 11 11C11.2431 11 11.4763 11.0966 11.6482 11.2685C11.8201 11.4404 11.9167 11.6736 11.9167 11.9167ZM11.9167 15.5833C11.9167 15.8264 11.8201 16.0596 11.6482 16.2315C11.4763 16.4034 11.2431 16.5 11 16.5C10.7569 16.5 10.5237 16.4034 10.3518 16.2315C10.1799 16.0596 10.0833 15.8264 10.0833 15.5833C10.0833 15.3402 10.1799 15.1071 10.3518 14.9352C10.5237 14.7632 10.7569 14.6667 11 14.6667C11.2431 14.6667 11.4763 14.7632 11.6482 14.9352C11.8201 15.1071 11.9167 15.3402 11.9167 15.5833ZM6.41667 12.8333C6.65978 12.8333 6.89294 12.7368 7.06485 12.5648C7.23676 12.3929 7.33333 12.1598 7.33333 11.9167C7.33333 11.6736 7.23676 11.4404 7.06485 11.2685C6.89294 11.0966 6.65978 11 6.41667 11C6.17355 11 5.94039 11.0966 5.76849 11.2685C5.59658 11.4404 5.5 11.6736 5.5 11.9167C5.5 12.1598 5.59658 12.3929 5.76849 12.5648C5.94039 12.7368 6.17355 12.8333 6.41667 12.8333ZM6.41667 16.5C6.65978 16.5 6.89294 16.4034 7.06485 16.2315C7.23676 16.0596 7.33333 15.8264 7.33333 15.5833C7.33333 15.3402 7.23676 15.1071 7.06485 14.9352C6.89294 14.7632 6.65978 14.6667 6.41667 14.6667C6.17355 14.6667 5.94039 14.7632 5.76849 14.9352C5.59658 15.1071 5.5 15.3402 5.5 15.5833C5.5 15.8264 5.59658 16.0596 5.76849 16.2315C5.94039 16.4034 6.17355 16.5 6.41667 16.5Z"
      fill="url(#paint0_linear_80_14992)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.41634 1.60417C6.59868 1.60417 6.77355 1.6766 6.90248 1.80553C7.03141 1.93446 7.10384 2.10933 7.10384 2.29167V2.99108C7.71067 2.97917 8.37892 2.97917 9.11409 2.97917H12.8843C13.6204 2.97917 14.2887 2.97917 14.8955 2.99108V2.29167C14.8955 2.10933 14.9679 1.93446 15.0969 1.80553C15.2258 1.6766 15.4007 1.60417 15.583 1.60417C15.7653 1.60417 15.9402 1.6766 16.0691 1.80553C16.1981 1.93446 16.2705 2.10933 16.2705 2.29167V3.04975C16.5088 3.06808 16.7343 3.091 16.9479 3.11942C18.0223 3.26425 18.8922 3.56858 19.5788 4.25425C20.2644 4.94083 20.5688 5.81075 20.7136 6.88508C20.8538 7.93008 20.8538 9.26383 20.8538 10.9487V12.8847C20.8538 14.5695 20.8538 15.9042 20.7136 16.9483C20.5688 18.0226 20.2644 18.8925 19.5788 19.5791C18.8922 20.2648 18.0223 20.5691 16.9479 20.7139C15.9029 20.8542 14.5692 20.8542 12.8843 20.8542H9.11501C7.43017 20.8542 6.09551 20.8542 5.05142 20.7139C3.97709 20.5691 3.10717 20.2648 2.42059 19.5791C1.73492 18.8925 1.43059 18.0226 1.28576 16.9483C1.14551 15.9033 1.14551 14.5695 1.14551 12.8847V10.9487C1.14551 9.26383 1.14551 7.92917 1.28576 6.88508C1.43059 5.81075 1.73492 4.94083 2.42059 4.25425C3.10717 3.56858 3.97709 3.26425 5.05142 3.11942C5.26501 3.091 5.49142 3.06808 5.72884 3.04975V2.29167C5.72884 2.10933 5.80127 1.93446 5.93021 1.80553C6.05914 1.6766 6.234 1.60417 6.41634 1.60417ZM5.23384 4.4825C4.31259 4.60625 3.78092 4.83908 3.39317 5.22683C3.00542 5.61458 2.77259 6.14625 2.64884 7.06842C2.62776 7.22425 2.61034 7.38925 2.59567 7.5625H19.4037C19.389 7.38833 19.3716 7.22425 19.3505 7.0675C19.2268 6.14625 18.9939 5.61458 18.6062 5.22683C18.2184 4.83908 17.6868 4.60625 16.7646 4.4825C15.8232 4.356 14.5811 4.35417 12.833 4.35417H9.16634C7.41826 4.35417 6.17709 4.356 5.23384 4.4825ZM2.52051 11C2.52051 10.2172 2.52051 9.53608 2.53242 8.9375H19.4669C19.4788 9.53608 19.4788 10.2172 19.4788 11V12.8333C19.4788 14.5814 19.477 15.8235 19.3505 16.7658C19.2268 17.6871 18.9939 18.2188 18.6062 18.6065C18.2184 18.9942 17.6868 19.2271 16.7646 19.3508C15.8232 19.4773 14.5811 19.4792 12.833 19.4792H9.16634C7.41826 19.4792 6.17709 19.4773 5.23384 19.3508C4.31259 19.2271 3.78092 18.9942 3.39317 18.6065C3.00542 18.2188 2.77259 17.6871 2.64884 16.7649C2.52234 15.8235 2.52051 14.5814 2.52051 12.8333V11Z"
      fill="url(#paint1_linear_80_14992)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_80_14992"
        x1="5.5"
        y1="11"
        x2="16.9592"
        y2="12.2334"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15A4FB" />
        <stop offset="1" stopColor="#3FF7A6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_80_14992"
        x1="1.14551"
        y1="1.60417"
        x2="21.8517"
        y2="2.74508"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15A4FB" />
        <stop offset="1" stopColor="#3FF7A6" />
      </linearGradient>
    </defs>
  </svg>
);

const StarIcon = () => (
  <svg
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.58676 8.14583L1.94093 9.10937L1.82322 9.13333C1.64503 9.18063 1.48259 9.27438 1.35248 9.405C1.22238 9.53562 1.12927 9.69842 1.08266 9.87679C1.03606 10.0552 1.03763 10.2427 1.08721 10.4203C1.13679 10.5978 1.23261 10.7591 1.36489 10.8875L6.17947 15.574L5.04406 22.1937L5.03051 22.3083C5.01961 22.4926 5.05787 22.6765 5.1414 22.8411C5.22492 23.0058 5.35071 23.1453 5.50586 23.2453C5.66102 23.3454 5.83998 23.4024 6.02442 23.4105C6.20886 23.4187 6.39214 23.3776 6.55551 23.2917L12.4993 20.1667L18.4295 23.2917L18.5336 23.3396C18.7056 23.4073 18.8924 23.4281 19.0751 23.3997C19.2577 23.3714 19.4295 23.295 19.5728 23.1784C19.7161 23.0618 19.8259 22.9091 19.8908 22.7361C19.9556 22.563 19.9733 22.3759 19.942 22.1937L18.8055 15.574L23.6222 10.8865L23.7034 10.7979C23.8195 10.655 23.8956 10.4838 23.924 10.3019C23.9524 10.1199 23.932 9.93372 23.865 9.76222C23.798 9.59071 23.6867 9.44003 23.5425 9.32553C23.3983 9.21103 23.2263 9.13681 23.0441 9.11041L16.3982 8.14583L13.4274 2.125C13.3414 1.95055 13.2083 1.80366 13.0432 1.70094C12.8781 1.59822 12.6875 1.54378 12.493 1.54378C12.2985 1.54378 12.108 1.59822 11.9428 1.70094C11.7777 1.80366 11.6446 1.95055 11.5586 2.125L8.58676 8.14583Z"
      fill="#A9A9A9"
    />
  </svg>
);

const ManageOrder = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const navigate = useNavigate()

  
  const data = orders?.data?.map((order, i) => ({
    order_id: order?.orderId,
    order_name: order?.orderName?.title || "Website development with AI",
    order_value: `$${order?.orderValue / 100 || "--"}`,
    date: {
      icon: <CalendarIcon />,
      text: moment(order?.createdAt).format("DD MMM, YYYY"),
    },
    status: {
      text: order?.status?.toLocaleLowerCase() || "complete",
    },
    actions: (
      <>
        <button
          className='text-success'

        >
          Chat
        </button>
        <button
          className='text-success'
        >Download Invoice</button>
      </>
    ),
  }));

  if (isLoading) return <LoadingTable />;

 
  if (!orders || orders?.data?.length <= 0)
    return (
      <div className="flex flex-col min-h-[200px] gap-3 justify-center items-center">
        <p className='text-white font-semibold text-2xl'>Oops!</p>
        <p className='text-white font-semibold text-lg mb-3'>No Record Found</p>

        <Button variant="contained" onClick={() => navigate('/user/services')} sx={{ background: theme.palette.primary.mainGradient, width: '250px' }}>{'Select Order'}</Button>
      </div>
    );
  return (
    <section className="">
      <div className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-white text-5xl font-semibold">
          <span className="gradientText">Order</span> list
        </h1>
        <div className="self-end mt-6 md:mt-0">
          <SearchInput className=" search bg-[#020718] !text-[#c8c8c8] bg-opacity-[23%] !max-w-[300px] border-2 border-[#15A4FB]/50" />
        </div>
      </div>

      {/* MOBILE TABLE */}
      {!orders || orders?.data?.length <= 0 ? null :
        <div className="grid grid-cols-1  gap-4 md:gap-6 md2:hidden">
          {orders?.data?.map((el, i) =>
            <div key={i} className="border-light-blue rounded  border px-4 py-2 flex flex-col">
              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Order ID</p>

                <p className="data font-medium text-sm capitalize">{el?.orderId}</p>
              </div>
              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Order Name</p>
                <p className="data font-medium text-sm capitalize">{el?.orderName?.title}</p>
              </div>
              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Order Value</p>
                <p className="data font-medium text-sm capitalize">{`$${el?.orderValue / 100 || "--"}`}</p>
              </div>
              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Purchase Date</p>
                <span className="flex gap-2 items-center">
                  {<CalendarIcon />}
                  <p className="">{moment(el?.createdAt).format('DD MMM, YYYY')}</p>
                </span>
              </div>

              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Status</p>
                <span
                  className={`!text-center capitalize ${STATUSCOLOR[`${el?.status}`]} bg-[#152784] rounded-[10px] py-[9px] px-8`}
                >
                  {el?.status}
                </span>
              </div>
              <div className="mobile-table flex py-2 border-light-blue border-b text-white justify-between items-center">
                <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Actions</p>
                <TableDropDown iconColor="white" tableId={"table"}>
                  <>
                    <button
                      className='text-success'

                    >
                      Chat
                    </button>
                    <button
                      className='text-success'
                    >Download Invoice</button>
                  </>
                </TableDropDown>
              </div>
            </div>
          )}

          <TablePagination
            textColor={'text-light-blue'}
            page={page}
            setPage={setPage}
            perPage={perPage}
            meta={{
              per_page: data?.length,
              total: data?.length,
              current_page: 1,
              // total: data?.length,
              rowCount: data?.length,
              totalPages: data?.length,
              currentPage: page,
            }}

          />
        </div>
      }
      <MyDataTable
        options={{
          searchOpen: false,
          filter: false,
          viewColumns: false,
        }}
        headCells={headCells}
        isLoading={isLoading}
        error={error}
        data={data}
        btnOnClick={() => navigate('/user/services')}

      />
    </section>
  );
};

export default ManageOrder;

const headCells = [
  {
    name: "order_id",
    label: "Order ID",
  },
  {
    name: "order_name",
    label: "Order Name",
  },
  {
    name: "order_value",
    label: "Order Value",
  },
  {
    name: "date",
    label: "purchase date",
    options: {
      customBodyRender: (value) => (
        <span className="flex gap-2 items-center">
          {value.icon}
          <p className="">{value.text}</p>
        </span>
      ),
    },
  },
  {
    name: "status",
    label: "status",
    options: {
      customBodyRender: (value) => (
        <span
          className={`!text-center capitalize ${STATUSCOLOR[value?.text]
            } bg-[#152784] rounded-[10px] py-[9px] px-8`}
        >
          {value.text}
        </span>
      ),
    },
  },

  {
    name: "actions",
    label: "",
    options: {
      customBodyRender: (value) => (
        // <span className="flex gap-6 items-center">
        //   <StarIcon />
        // <IconButton>
        //   <MoreHorizOutlined sx={{ color: "#A9A9A9" }} fontSize="large" />
        // </IconButton>
        // </span>
        <TableDropDown tableId={"table"}>
          {value}
        </TableDropDown>
      ),
    },
  },
];

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  // Chip
} from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import SearchInput from "../../../../../components/forms/SearchInput";
import { useGetOrdersQuery } from "../../../../../services/general.api";
import moment from "moment";
// import MyDataTable2 from '../../../../../components/TableComponent/MyDataTable2';
import UserDisplay from "../../../../../components/TableComponent/UserDisplay"
import { useEffect, useState } from 'react';
import TablePagination from '../../../../../components/TablePagination';
import { useGetAdminOrdersQuery } from '../../../../../services/Admin/adminGeneral.api';
import theme from "../../../../../theme";
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

const DiamondIcon = () => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.92859 0.500001C3.7828 0.500006 3.63989 0.539723 3.51585 0.614709C3.39181 0.689695 3.29152 0.796992 3.22621 0.924596L0.0835729 7.07814C0.0156085 7.21063 -0.0117992 7.35953 0.00464836 7.50691C0.0210959 7.65429 0.0806978 7.79388 0.176281 7.90887L10.3898 20.216C10.4635 20.3047 10.5565 20.3762 10.6619 20.4254C10.7674 20.4745 10.8827 20.5 10.9995 20.5C11.1163 20.5 11.2316 20.4745 11.3371 20.4254C11.4426 20.3762 11.5355 20.3047 11.6092 20.216L21.8227 7.90887C21.9186 7.79403 21.9785 7.65452 21.9952 7.50714C22.0119 7.35975 21.9848 7.21077 21.917 7.07814L18.7744 0.924596C18.709 0.796758 18.6084 0.689306 18.4841 0.614304C18.3597 0.539303 18.2165 0.49972 18.0704 0.500001H3.92859ZM2.05715 6.65355L4.41412 2.03839H7.63532L6.45684 6.65355H2.05715ZM2.43583 8.19193H6.49455L9.02908 16.1362L2.43583 8.19193ZM8.13972 8.19193H13.8593L10.9995 17.15L8.13972 8.19193ZM15.5061 8.19193H19.5632L12.9699 16.1362L15.5061 8.19193ZM19.9419 6.65355H15.5422L14.3637 2.03839H17.5849L19.9419 6.65355ZM13.9222 6.65355H8.07686L9.25535 2.03839H12.7437L13.9222 6.65355Z"
      fill="url(#paint0_linear_132_11558)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_132_11558"
        x1="0"
        y1="0.5"
        x2="23.103"
        y2="1.86771"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15A4FB" />
        <stop offset="1" stopColor="#3FF7A6" />
      </linearGradient>
    </defs>
  </svg>
);

const ArrowUpGradient = () => (
  <svg
    width="19"
    height="11"
    viewBox="0 0 19 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5265 0.419953C10.2589 0.151057 9.89594 0 9.51754 0C9.13913 0 8.77621 0.151057 8.5086 0.419953L0.435668 8.53397C0.299368 8.66628 0.190651 8.82455 0.115859 8.99955C0.041068 9.17454 0.00170046 9.36275 5.3881e-05 9.5532C-0.00159269 9.74365 0.034515 9.93253 0.106269 10.1088C0.178024 10.2851 0.283988 10.4452 0.417979 10.5799C0.551971 10.7146 0.711305 10.8211 0.886687 10.8932C1.06207 10.9653 1.24998 11.0016 1.43947 10.9999C1.62896 10.9983 1.81621 10.9587 1.99032 10.8836C2.16443 10.8084 2.3219 10.6991 2.45354 10.5621L9.51754 3.46217L16.5815 10.5621C16.8507 10.8234 17.2112 10.968 17.5853 10.9647C17.9595 10.9614 18.3174 10.8106 18.582 10.5446C18.8466 10.2787 18.9967 9.91896 18.9999 9.54288C19.0032 9.1668 18.8594 8.80449 18.5994 8.53397L10.5265 0.419953Z"
      fill="url(#paint0_linear_132_11535)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_132_11535"
        x1="0"
        y1="11"
        x2="19.851"
        y2="9.15466"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15A4FB" />
        <stop offset="1" stopColor="#3FF7A6" />
      </linearGradient>
    </defs>
  </svg>
);

const ArrowDown = () => (
  <svg
    width="19"
    height="11"
    viewBox="0 0 19 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5265 10.58C10.2589 10.8489 9.89594 11 9.51754 11C9.13913 11 8.77621 10.8489 8.5086 10.58L0.435668 2.46603C0.299368 2.33372 0.190651 2.17545 0.115859 2.00045C0.041068 1.82546 0.00170046 1.63725 5.3881e-05 1.4468C-0.00159269 1.25635 0.034515 1.06747 0.106269 0.8912C0.178024 0.714926 0.283988 0.554779 0.417979 0.420106C0.551971 0.285433 0.711305 0.178929 0.886687 0.106809C1.06207 0.0346899 1.24998 -0.0016008 1.43947 5.41561e-05C1.62896 0.00170911 1.81621 0.041277 1.99032 0.116449C2.16443 0.191621 2.3219 0.300891 2.45354 0.437884L9.51754 7.53783L16.5815 0.437884C16.8507 0.176609 17.2112 0.0320366 17.5853 0.0353046C17.9595 0.0385726 18.3174 0.189419 18.582 0.455356C18.8466 0.721293 18.9967 1.08104 18.9999 1.45712C19.0032 1.8332 18.8594 2.19551 18.5994 2.46603L10.5265 10.58Z"
      fill="#A9A9A9"
    />
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

const FileIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2.15723e-08H3C2.20435 2.15723e-08 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H15C15.7956 20 16.5587 19.6839 17.1213 19.1213C17.6839 18.5587 18 17.7956 18 17V9H12C11.2044 9 10.4413 8.68393 9.87868 8.12132C9.31607 7.55871 9 6.79565 9 6V2.15723e-08ZM18 7V6.828C17.9996 6.03276 17.6834 5.27023 17.121 4.708L13.293 0.878C12.7304 0.315719 11.9674 -9.53012e-05 11.172 2.15723e-08H11V6C11 6.26522 11.1054 6.51957 11.2929 6.70711C11.4804 6.89464 11.7348 7 12 7H18Z"
      fill="url(#paint0_linear_140_13750)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_140_13750"
        x1="0"
        y1="0"
        x2="18.9243"
        y2="0.916634"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15A4FB" />
        <stop offset="1" stopColor="#3FF7A6" />
      </linearGradient>
    </defs>
  </svg>
);


const ManageOrder = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const { data: orders, isLoading, error } = useGetAdminOrdersQuery();


  const [OrderData, setOrderData] = useState([])

  useEffect(() => {
    setOrderData(orders?.data)
  }, [orders?.data])

  const [openMobilDropdown, setOpenMobilDropdown] = useState(false)

  const [accordionItems, setAccordionItems] = useState(
    OrderData?.map((order, i) => ({
      isOpen: false,
      ...order,
    }))
  );
  // console.log(OrderData, accordionItems)
  const toggleItem = (itemId) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === itemId) {
          return { ...item, isOpen: !item.isOpen };
        } else {
          return { ...item, isOpen: false };
        }
      })
    );
  };
  if (isLoading) return (<LoadingTable />)
  return (
    <>
      <div className="mb-10 overflowhidden lg:mb-16 flex flex-col md:flex-row justify-between md:items-center">
        <h1 className="text-{#333} text-5xl font-semibold">
          <span className="">Order</span> list
        </h1>
        <div className="self-end mt-6 md:mt-0">
          <SearchInput className=" search bg-[#fff] !text-[#c8c8c8] bg-opacity-[23%] !max-w-[300px] border-2 border-[#15A4FB]/50" />
        </div>
      </div>

      <main className="overflow-x-auto noScrollBar">
        {/* <div className="min-w-[1000px] overflow-x-auto"> */}
        {
          OrderData?.length <= 0
            ? (
              <div className="flex flex-col min-h-[200px] gap-3 justify-center items-center">
                <p className='text-main-bg font-semibold text-2xl'>Oops!</p>
                <p className='text-main-bg font-semibold text-lg mb-3'>No Order Found</p>

                {/* <Button
                  variant="contained"
                  href='/user/services'
                  sx={{ background: theme.palette.secondary.mainGradient, width: '250px' }}
                >
                  {'Select Order'}
                </Button> */}
              </div>
            )
            :
            <>
              {/* MOBILE TABLE */}
              <div className="grid grid-cols-1  gap-3 sm:gap-4 md:hidden">
                {OrderData?.map((el, i) =>
                  <div key={i} className="border-light-blue flex flex-col">
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue borderb text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Order ID</p>

                      <p className="data font-medium text-sm capitalize">{el?.orderId}</p>
                    </div>
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue border-b text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Order Name</p>
                      <p className="data font-medium text-sm capitalize">{el?.orderName?.title}</p>
                    </div>
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue border-b text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Date of Assignment</p>
                      <span className="flex gap-2 items-center">
                        {<CalendarIcon />}
                        <p className="">{moment(el?.createdAt).format('DD MMM, YYYY')}</p>
                      </span>
                    </div>
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue border-b text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Date of Delivery</p>
                      <div className="flex gap-4 items-center">
                        <span className="flex gap-2 items-center">
                          {<CalendarIcon />}
                          <p className="">{moment(el?.dateOfDelivery).format('DD MMM, YYYY')}</p>
                        </span>

                        <button type="button" className="font-semibold gradientText">
                          Extend
                        </button>
                      </div>
                    </div>
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue border-b text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base">Status</p>
                      <span
                        className={`!text-center capitalize ${STATUSCOLOR[`${el?.status}`]} bg-[#152784] rounded-[10px] py-[9px] px-8`}
                      >
                        {el?.status}
                      </span>
                    </div>
                    <div className="mobile-table bg-main-bg text-white flex my-2 p-4 rounded-[10px] sm:px-6 border-light-blue border-b text-min-bg justify-between items-center">
                      <p className="headcells w-1/5 sm:w-[30%] capitalize font-semibold text-base"></p>
                      <span className="flex gap-4 items-center">
                        <IconButton>
                          <FileIcon />
                        </IconButton>
                        <IconButton>
                          <StarIcon />
                        </IconButton>
                        <IconButton
                          // onClick={onClick}
                          onClick={() => setOpenMobilDropdown(!openMobilDropdown)}
                        >
                          {
                            openMobilDropdown ? <ArrowUpGradient /> : <ArrowDown />
                            // <KeyboardArrowDownOutlined sx={{ color: '#A9A9A9', }} fontSize='large' />
                          }
                        </IconButton>
                      </span>
                    </div>

                    {/* DROPDOWN */}
                    <div
                      className={`${openMobilDropdown ? 'block' : 'hidden'} max-w[90%] -mt-3 sm:-mt-4 my-2 p-4 text-white rounded[10px] sm:px-6 bg-secondary rounded-bl-[10px] rounded-br-[10px]`}
                    >
                      <div className="flex flex-col gap-6 justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-xl sm:text-2xl mb-4 sm:mb-6 md:text-[2rem] mb10">
                            Selected Services:
                          </p>
                          <div className="max-w-[348px] max-h-[261px]  h-full w-full">
                            <img
                              src="/images/card-img-2.png"
                              alt="service "
                              className="w-full"
                            />
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="font-medium text-xl sm:text-2xl mb-4 sm:mb-6 md:text-[2rem] mb10">
                            Message from the client
                          </p>

                          <div className="flex gap-2">
                            <span className="relative w-fit h-fit">
                              <Avatar
                                src="/images/img.png"
                                alt="user"
                                sx={{ borderRadius: "8px" }}
                              />
                              <span className="w-3 h-3 rounded-full absolute -bottom-1 -right-1 bg-[#28C345]"></span>
                            </span>

                            <div>
                              <p className="font-bold text-white text-xs">
                                Sallie Wade{" "}
                                <span className="font-normal text-light-blue">8:00 PM</span>
                              </p>

                              <div className="p-3 max-w-[469px] bg-[#3C57EA] rounded-[19px] mt-2 !rounded-tl-[0px] text-xs font-normal">
                                Hey Team! I need a website ASAP! Please create something
                                similar to AI NFT sphere. I like bright colors and rough lines
                                and structure. Also I have no Idea about photos and
                                text.....Hey Team! I need a website ASAP! Please create
                                something similar to AI NFT sphere. I like bright colors and
                                rough lines and structure. Also I have no Idea about photos
                                and text.....
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-9  flex flex-wrap gap-4 justify-between items-center">
                        <div className="flex gap-4 items-center">
                          <p className="font-semibold text-lg md:text-xl">Selected Tire:</p>
                          <span className="font-medium capitalize text-base flex gap-2.5 items-center">
                            {el?.selectedTire}
                            <DiamondIcon />
                          </span>
                        </div>

                        <div className="flex gap-4 flex-wrap items-center">
                          <div className="flex gap-4 items-center">
                            <p className="font-semibold text-lg md:text-xl">Ordered by:</p>

                            <UserDisplay
                              textWhite
                              size="small"
                              img={el?.userId?.profileImage}
                              name={el?.userId?.fullName}
                              email={el?.userId?.email}
                            />
                          </div>
                          <div className="">
                            <p className="font-semibold text-lg md:text-xl">
                              Total Price: <span className="gradientText"> ${+el?.orderValue / 100}</span>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden md:flex flex-col gap-5 min-w-[1000px]">
                <div className="flex justify-between gap-10 font-semibold px-8 text-base text-[#333] items-center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        size={"medium"}
                        sx={{ color: "#333" }}
                        defaultCheked
                      />
                    }
                    sx={{ "MuiFormControlLabel-label": { fontSize: 14 }, mr: 0 }}
                    label=""
                  />
                  <p>Order ID</p>
                  <p>Order Name</p>
                  <p>Date of Assignment</p>
                  <p>Date of Delivery</p>
                  <p>Status</p>
                  <p></p>
                </div>

                {OrderData?.map((list) => (
                  <EachAccordion
                    key={list._id}
                    isOpen={list.isOpen}
                    list={list}
                    onClick={() => toggleItem(list._id)}
                  />
                ))}
              </div>
            </>
        }

        {OrderData && OrderData?.length > 0 && (
          <TablePagination
            // meta={{ ...pagination }}
            page={page}
            setPage={setPage}
            perPage={perPage}
            meta={{
              per_page: OrderData?.length,
              total: OrderData?.length,
              current_page: 1,
              // total: OrderData?.length,
              rowCount: OrderData?.length,
              totalPages: OrderData?.length,
              currentPage: page,
            }}
          // setPage={setPage}
          // setPerPage={setPerPage}
          />
        )}
        {/* <MyDataTable2
                options={{
                    searchOpen: false,
                    filter: false,
                    viewColumns: false,
                }}
                headCells={headCells}
                isLoading={isLoading}
                error={error}
                data={data}
                emptyData={{
                    // icon: UserTick,
                    message: 'No Clients',
                    extraText: 'There are no order_names yet.',
                }}
            /> */}
      </main>
    </>
  );
};

export default ManageOrder;

const EachAccordion = ({ list, }) => {
  // console.log(list)
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className=" bg-secondary w-ull text-white font-medium text-sm rounded-[10px] w-full">
      <div
        className={`flex ${isOpen ? "bg-main-bg" : "bg-secondary"
          } pl-8 px-4 py-3 lg:gap-4 justify-between rounded-tl-[10px] rounded-tr-[10px] ${!isOpen && "rounded-bl-[10px] rounded-br-[10px]"
          } items-center`}
      >
        <FormControlLabel
          control={
            <Checkbox size={"medium"} sx={{ color: "#fff" }} defaultCheked />
          }
          sx={{ "MuiFormControlLabel-label": { fontSize: 14 }, mr: 0 }}
          label=""
        />
        <p>{list?.orderId}</p>
        <p>{list?.orderName?.title}</p>
        <span className="flex gap-2 items-center">
          {<CalendarIcon />}
          <p className="">{moment(list?.createdAt).format('DD MMM, YYYY')}</p>
        </span>
        <div className="flex gap-4 items-center">
          <span className="flex gap-2 items-center">
            {<CalendarIcon />}
            <p className="">{moment(list?.dateOfDelivery).format('DD MMM, YYYY')}</p>
          </span>

          <button type="button" className="font-semibold gradientText">
            Extend
          </button>
        </div>

        <span
          className={`!text-center capitalize ${STATUSCOLOR[`${list?.status}`]} bg-[#152784] rounded-[10px] py-[9px] px-8`}
        >
          {list?.status}
        </span>

        <span className="flex gap-4 items-center">
          <IconButton>
            <FileIcon />
          </IconButton>
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton
            // onClick={onClick}
            onClick={() => setisOpen(!isOpen)}
          >
            {
              isOpen ? <ArrowUpGradient /> : <ArrowDown />
              // <KeyboardArrowDownOutlined sx={{ color: '#A9A9A9', }} fontSize='large' />
            }
          </IconButton>
        </span>
      </div>

      {/* DROPDOWN */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } max-w[90%] pl8 pt-10 pb-6 px-8  bg-secondary rounded-bl-[10px] rounded-br-[10px]`}
      >
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="font-secondary text-2xl sm:text-3xl text-[2rem] mb-10">
              Selected Services:
            </p>
            <div className="w-[348px] h-[261px]">
              <img
                src="/images/card-img-2.png"
                alt="service "
                className="w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-secondary text-2xl sm:text-3xl text-[2rem] mb-10">
              Message from the client
            </p>

            <div className="flex gap-2">
              <span className="relative w-fit h-fit">
                <Avatar
                  src="/images/img.png"
                  alt="user"
                  sx={{ borderRadius: "8px" }}
                />
                <span className="w-3 h-3 rounded-full absolute -bottom-1 -right-1 bg-[#28C345]"></span>
              </span>

              <div>
                <p className="font-bold text-white text-xs">
                  Sallie Wade{" "}
                  <span className="font-normal text-light-blue">8:00 PM</span>
                </p>

                <div className="p-3 max-w-[469px] bg-[#3C57EA] rounded-[19px] mt-2 !rounded-tl-[0px] text-xs font-normal">
                  Hey Team! I need a website ASAP! Please create something
                  similar to AI NFT sphere. I like bright colors and rough lines
                  and structure. Also I have no Idea about photos and
                  text.....Hey Team! I need a website ASAP! Please create
                  something similar to AI NFT sphere. I like bright colors and
                  rough lines and structure. Also I have no Idea about photos
                  and text.....
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14  flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <p className="font-semibold text-lg md:text-xl">Selected Tire:</p>
            <span className="font-medium capitalize text-base flex gap-2.5 items-center">
              {list?.selectedTire}
              <DiamondIcon />
            </span>
          </div>

          <div className="flex gap-10 items-center">
            <div className="flex gap-4 items-center">
              <p className="font-semibold text-lg md:text-xl">Ordered by:</p>

              <UserDisplay
                textWhite
                size="small"
                img={list?.userId?.profileImage}
                name={list?.userId?.fullName}
                email={list?.userId?.email}
              />
            </div>
            <div className="">
              <p className="font-semibold text-lg md:text-xl">
                Total Price: <span className="gradientText"> ${+list?.orderValue / 100}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    label: "date",
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
        <span className="flex gap-6 items-center">
          <StarIcon />
          <IconButton>
            <MoreHorizOutlined sx={{ color: "#A9A9A9" }} fontSize="large" />
          </IconButton>
        </span>
      ),
    },
  },
];

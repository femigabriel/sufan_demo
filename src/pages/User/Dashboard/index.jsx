import SearchInput from "../../../components/forms/SearchInput"
import { useGetUser } from "../../../hooks/getUserHook"
import DashboardLayout from "../../../templates/DashboardLayout"
import Tabs from "./Tabs"


const Dashboard = () => {
  const { user } = useGetUser()
  // console.log(user?._id)
  return (
    <DashboardLayout
      type={'user'}
    >
      <section
        style={{
          backgroundImage: "url('/images/bg-rectangles-dashboard.png'), linear-gradient(to right, #2439AE, #0A1A71)",
          backgroundSize: '60%, 100%',
          backgroundPosition: 'right bottom, center center'

        }}
        className="bg-gradient-to-r lg:h-screen max-h-[378px] px-4 sm:px-6 md:px-10 lg:px-[4vw] -mx4 sm:-mx6 md:-mx10 lg:-mx[4vw] py-10 md:py-20 bg-no-repeat text-white bg-cover"
      >
        <div className="max-w-[1170px] mx-auto">

          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-[4rem]">Welcome back, <span className="capitalize"> {user?.fullName?.split(' ')[0]}</span>!</h1>
          <p className="font-normal text-base mt-4 mb-10">
            Let’s check your order list
          </p>
          <SearchInput className='search bg-[#020718] !text-[#c8c8c8] bg-opacity-[23%] !max-w-[300px] border-2 border-[#15A4FB]/50' />
        </div>

      </section>

      <section className="px-4 sm:px-6 md:px-10 lg:px-[4vw]">
        <Tabs />
      </section>
    </DashboardLayout>
  )
}

export default Dashboard
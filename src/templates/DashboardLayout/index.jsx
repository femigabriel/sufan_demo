/* eslint-disable react/prop-types */
import Footer from "../LandingPageLayout/widgets/Footer"
import NavBar from "../LandingPageLayout/widgets/NavBar"

const DashboardLayout = ({ children, type }) => {
    return (
        <main className="max-w[120rem] mx-auto">
            <section
                className={`relative bg-main-bg   min-h-screen bg-no-repeat bgcover`}>
                <section className="px-4 sm:px-6 md:px-10 lg:px-[4vw]">
                    <NavBar type={type} />
                </section>

                <section className={`py12 lg:py[7.5rem] ${type === 'admin' ? 'bg-white -mx4 sm:-mx6 md:-mx10 lg:-mx[4vw]' : 'bg-main-bg'}`}>
                    {children}
                </section>
            </section>

            <Footer />

        </main>
    )
}

export default DashboardLayout
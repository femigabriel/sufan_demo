
import React from "react"
import NavBar from "../../../../templates/LandingPageLayout/widgets/NavBar"
import Footer from "../../../../templates/LandingPageLayout/widgets/Footer"
import { Newsletter } from "./Newsletter"


const PurchaseLayout = ({ children, type = 'user', nav = true, footer = true, }) => {
    return (
        <main className="maxw-[120rem] mx-auto">
            <section
                style={{
                    backgroundImage: "url('/images/bg-rectangles-1.png'), url('/images/bg-rectangles.png')",
                    backgroundSize: '40%',
                    backgroundPosition: 'left top, right bottom'

                }}
                className={`relative ${type === 'admin' ? 'bg-main-bg' : 'bg-main-bg'} px-4 sm:px-6 md:px-10 lg:px-[4vw]  min-h-screen bg-no-repeat bgcover`}>
                {nav &&
                    <NavBar type={type} />
                }
                <section className="py-12 pb-0 lg:py-[7.5rem]">
                    {children}
                </section>
            </section>

            {/* {FAQComp && <FAQ findService={findService} />} */}
  <Newsletter />
            {
                footer &&
                <Footer />
            }
        </main >
    )
}

export default PurchaseLayout
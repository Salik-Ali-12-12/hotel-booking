"use client"
import BannerFormOne from "@/components/common/banner-form/BannerFormOne"
import About from "./About"
import Banner from "./Banner"
import Blog from "./Blog"
import Choose from "./Choose"
import CtaThree from "./Cta"
import CtaTwo from "./CtaTwo"
import Location from "./Location"
import Testimonial from "./Testimonial"
import dynamic from "next/dynamic"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterThree from "@/layouts/footers/FooterThree"

const Listing = dynamic(() => import("./Listing"), { ssr: false });

const HomeThree = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <Banner />
            <BannerFormOne />
            <About />
            <Listing />
            <Choose />
            <CtaThree />
            <Location />
            <CtaTwo />
            <Testimonial />
            <Blog />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree

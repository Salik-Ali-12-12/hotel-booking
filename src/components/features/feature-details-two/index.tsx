import BreadCrumb from "./BreadCrumb"
import TourDetailsArea from "./TourDetailsArea"
import TourAboutDetails from "./TourAboutDetails"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Listing from "./Listing"
import FooterFive from "@/layouts/footers/FooterFive"

const FeatureDetailsTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb />
            <TourDetailsArea />
            <TourAboutDetails />
            <Listing />
         </main>
         <FooterFive />
      </>
   )
}

export default FeatureDetailsTwo

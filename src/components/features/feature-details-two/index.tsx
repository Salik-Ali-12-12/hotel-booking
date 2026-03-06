import BreadCrumb from "./BreadCrumb"
import TourDetailsArea from "./TourDetailsArea"
import TourAboutDetails from "./TourAboutDetails"
import HeaderThree from "@/layouts/headers/HeaderOne"
import Listing from "./Listing"
import FooterFive from "@/layouts/footers/FooterThree"

const FeatureDetailsTwo = () => {
   return (
      <>
         <HeaderThree />
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
